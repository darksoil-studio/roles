import { provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RolesStore } from '../roles-store.js';

@customElement('roles-context')
export class RolesContext extends LitElement {
	@provide({ context: rolesStoreContext })
	@property({ type: Object })
	store!: RolesStore;

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
