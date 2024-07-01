# Kill all subprocesses on exit
cleanup() {
        local pids
        pids=$(jobs -pr)
        [ -n "$pids" ] && kill "$pids"
}
trap "cleanup" INT QUIT TERM EXIT

# Assumes hc-sandbox and hc-launch is in the path

HAPP_PATH="$1"
# ROLE_TO_EDIT="$2"
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
  echo "pass" | hc-sandbox --piped create --root "$WORKDIR" -d progenitor network --bootstrap "http://127.0.0.1:$BOOTSTRAP_PORT" webrtc "ws://127.0.0.1:$SIGNAL_PORT"
  echo "pass" | hc-sandbox --piped run -e "${WORKDIR}/progenitor" &
  echo "pass" | hc-sandbox --piped call list-cells
  AGENT=$(echo "pass" | hc-sandbox --piped call new-agent | awk -F"[ ]+" '/Added agent/{print $4}')

  echo "$WORKDIR"

  hc-app unpack "$HAPP_PATH" --output "$WORKDIR/happ"
  echo "$AGENT"
}

PROGENITOR=$(run_progenitor)
