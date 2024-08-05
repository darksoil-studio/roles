import {
	AsyncResult,
	AsyncSignal,
	JoinAsyncOptions,
	Signal,
	createLinkToLink,
	joinAsync,
	sortLinksByTimestampAscending,
	uniquifyLinks,
} from '@holochain-open-dev/signals';
import {
	ActionCommittedSignal,
	EntryRecord,
	GetonlyMap,
	HashType,
	LinkTypeForSignal,
	ZomeClient,
	getHashType,
	retype,
} from '@holochain-open-dev/utils';
import { HoloHash, Link } from '@holochain/client';
import { encode } from '@msgpack/msgpack';

export function mapValues<K extends string, V, U>(
	map: ReadonlyMap<K, V>,
	mappingFn: (value: V, key: K) => U,
): ReadonlyMap<K, U> {
	const mappedMap = new Map<K, U>();

	for (const [key, value] of map.entries()) {
		mappedMap.set(key, mappingFn(value, key));
	}
	return mappedMap;
}

export function joinAsyncMap<K extends string, T>(
	map: ReadonlyMap<K, AsyncResult<T>>,
	joinOptions?: JoinAsyncOptions,
): AsyncResult<ReadonlyMap<K, T>> {
	const resultsArray = Array.from(map.entries()).map(([key, result]) => {
		if (result.status !== 'completed') return result;
		const value = [key, result.value] as [K, T];
		return {
			status: 'completed',
			value,
		} as AsyncResult<[K, T]>;
	});
	const arrayResult = joinAsync(resultsArray, joinOptions);

	if (arrayResult.status !== 'completed') return arrayResult;

	const value = new Map<K, T>(arrayResult.value);
	return {
		status: 'completed',
		value,
	} as AsyncResult<ReadonlyMap<K, T>>;
}

export function slice<K extends string, V>(
	map: GetonlyMap<K, V>,
	keys: K[],
): ReadonlyMap<K, V> {
	const newMap = new Map<K, V>();

	for (const key of keys) {
		newMap.set(key, map.get(key));
	}
	return newMap;
}

function areArrayHashesEqual(
	array1: Array<HoloHash>,
	array2: Array<HoloHash>,
): boolean {
	if (array1.length !== array2.length) return false;

	for (let i = 0; i < array1.length; i += 1) {
		if (array1[i].toString() !== array2[i].toString()) {
			return false;
		}
	}

	return true;
}

export function queryLiveEntriesSignal<
	T,
	S extends ActionCommittedSignal<any, any> & any,
>(
	client: ZomeClient<S>,
	queryEntries: () => Promise<Array<EntryRecord<T>>>,
	entry_type: String,
	pollIntervalMs: number = 20_000,
): AsyncSignal<Array<EntryRecord<T>>> {
	let active = false;
	let unsubs: () => void | undefined;
	let queriedEntries: Array<EntryRecord<T>> | undefined;
	const signal = new Signal.State<AsyncResult<Array<EntryRecord<T>>>>(
		{ status: 'pending' },
		{
			[Signal.subtle.watched]: () => {
				active = true;
				const fetch = async () => {
					if (!active) return;

					const nQueriedEntries = await queryEntries().finally(() => {
						if (active) {
							setTimeout(() => fetch(), pollIntervalMs);
						}
					});
					if (
						queriedEntries === undefined ||
						!areArrayHashesEqual(
							queriedEntries.map(r => r.actionHash),
							nQueriedEntries.map(r => r.actionHash),
						)
					) {
						queriedEntries = nQueriedEntries;
						signal.set({
							status: 'completed',
							value: queriedEntries,
						});
					}
				};
				fetch().catch(error => {
					signal.set({
						status: 'error',
						error,
					});
				});
				unsubs = client.onSignal(async originalSignal => {
					if (!active) return;
					if (!(originalSignal as ActionCommittedSignal<any, any>).type) return;
					const hcSignal = originalSignal as ActionCommittedSignal<any, any>;

					if (
						hcSignal.type === 'EntryCreated' &&
						hcSignal.app_entry.type === entry_type
					) {
						const newEntry = new EntryRecord<T>({
							entry: {
								Present: {
									entry_type: 'App',
									entry: encode(hcSignal.app_entry),
								},
							},
							signed_action: hcSignal.action,
						});
						if (!queriedEntries) queriedEntries = [];
						queriedEntries.push(newEntry);
						signal.set({
							status: 'completed',
							value: queriedEntries,
						});
					} else if (hcSignal.type === 'EntryDeleted') {
						if (
							queriedEntries?.find(
								e =>
									e.actionHash.toString() ===
									hcSignal.action.hashed.content.deletes_address.toString(),
							)
						) {
							queriedEntries = queriedEntries.filter(
								e =>
									e.actionHash.toString() !==
									hcSignal.action.hashed.content.deletes_address.toString(),
							);
							signal.set({
								status: 'completed',
								value: queriedEntries,
							});
						}
					}
				});
			},
			[Signal.subtle.unwatched]: () => {
				signal.set({
					status: 'pending',
				});
				active = false;
				queriedEntries = undefined;
				unsubs();
			},
		},
	);

	return signal;
}
