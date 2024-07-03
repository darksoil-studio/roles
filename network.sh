set -e

# Kill all subprocesses on exit
cleanup() {
  local pids
  pids=$(jobs -pr)
  echo "$pids"
  [ -n "$pids" ] && kill "$pids"
  pstree -A -p $$ | grep -Eow "[0-9]+" | xargs kill
  killall hc-launch holochain hc-run-local-services
}
trap "cleanup" INT QUIT TERM EXIT SIGINT

# Assumes yq, hc-app, hc-sandbox and hc-launch is in the path
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
  AGENT=$(hc-progenitor --workdir "$WORKDIR" print-progenitor)

  echo "$AGENT"
}

function override_progenitor_in_happ {
  PROGENITOR="$1"
  set -e

  cp "$HAPP_PATH" "$WORKDIR/happ.happ"

  hc-app unpack "$WORKDIR/happ.happ" --output "$WORKDIR/happ" >/dev/null
  yq -y -i '(.roles.[] | select(.name == "'${ROLE_TO_EDIT}'") | .dna.modifiers.properties) |= {"progenitors":["'$PROGENITOR'"]}' "$WORKDIR/happ/happ.yaml"
  rm -f "$WORKDIR/happ.happ"
  hc-app pack "$WORKDIR/happ" -o "$WORKDIR/happ.happ" >/dev/null
}

PROGENITOR=$(run_progenitor)

echo "Created progenitor: $PROGENITOR"

override_progenitor_in_happ "$PROGENITOR"

# Run all other agents
mkdir "$WORKDIR/others"
cd "$WORKDIR/others"

for i in $(seq 1 $((NUM_AGENTS-1)) ); do
  hc-embark --password pass "$WORKDIR/happ.happ" --ui-port "$UI_PORT" --bootstrap-url "http://127.0.0.1:$BOOTSTRAP_PORT" --signal-url "ws://127.0.0.1:$SIGNAL_PORT"
done

