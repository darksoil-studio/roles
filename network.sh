# Assumes hc-progenitor and hc-pilot are in the path
set -e

# Kill all subprocesses on exit
list_descendants ()
{
  local children=$(ps -o pid= --ppid "$1")

  for pid in $children
  do
    list_descendants "$pid"
  done

  echo "$children"
}
cleanup() {
  kill $(list_descendants $$) > /dev/null 2>&1
}
trap "cleanup" INT QUIT TERM EXIT SIGINT SIGTERM

HAPP_PATH="$1"
ROLE_TO_EDIT="$2"
UI_PORT="$3"
NUM_AGENTS="${4:-2}"

WORKDIR=$(mktemp -d)

echo "Running a network of $NUM_AGENTS agents pointing at the UI PORT $UI_PORT in $WORKDIR"
cd "$WORKDIR"

function random_unused_port {
  (netstat --listening --all --tcp --numeric | 
    sed '1,2d; s/[^[:space:]]*[[:space:]]*[^[:space:]]*[[:space:]]*[^[:space:]]*[[:space:]]*[^[:space:]]*:\([0-9]*\)[[:space:]]*.*/\1/g' |
    sort -n | uniq; seq 1 1000; seq 1 65535
  ) | sort -n | uniq -u | shuf -n 1
}

BOOTSTRAP_PORT=$(random_unused_port)
SIGNAL_PORT=$(random_unused_port)

hc-run-local-services --bootstrap-port "$BOOTSTRAP_PORT" --signal-port "$SIGNAL_PORT" &

function run_progenitor {
  set -e
  hc-progenitor --workdir "$WORKDIR" run --progenitor-dna-role "$ROLE_TO_EDIT" --ui-port "$UI_PORT" --bootstrap-url "http://127.0.0.1:$BOOTSTRAP_PORT" --signal-url "ws://127.0.0.1:$SIGNAL_PORT" "$HAPP_PATH"
}

run_progenitor &
PROGENITOR=$(hc-progenitor --workdir "$WORKDIR" print-progenitor)

echo "Created progenitor: $PROGENITOR"

# Run all other agents
for i in $(seq 1 $((NUM_AGENTS-1)) ); do
  # progenitor.happ will contain a copy of the app bundle with the progenitor's pub key in the properties
  hc-pilot --password pass "$WORKDIR/progenitor.happ" --ui-port "$UI_PORT" --bootstrap-url "http://127.0.0.1:$BOOTSTRAP_PORT" --signal-url "ws://127.0.0.1:$SIGNAL_PORT" &
done

wait
