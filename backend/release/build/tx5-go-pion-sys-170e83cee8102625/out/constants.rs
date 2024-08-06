/// Reporting an error from the lib.
/// - allowed contexts: Event, Response
/// - msg slot_a = utf8 error id ptr
/// - msg slot_b = utf8 error id len
/// - msg slot_c = utf8 error info ptr
/// - msg slot_d = utf8 error info len
pub const TY_ERR: usize = 0xffff;
/// A tracing message published by the lib.
/// - allowed contexts: Event
/// - msg slot_a: logging level
/// - msg slot_b: utf8 info ptr
/// - msg slot_c: utf8 info len
pub const TY_ON_TRACE: usize = 0xfffe;
/// Init MUST be called EXACTLY once before a peer con is created.
/// - allowed contexts: Call, Response
/// - msg slot_a: config buffer id
pub const TY_TX_5_INIT: usize = 0x7001;
/// Request a go buffer be created / giving access to said buffer in resp.
/// - allowed contexts: Call, Response
/// - msg slot_a: buffer id
pub const TY_BUFFER_ALLOC: usize = 0x8001;
/// Request an existing buffer be released. It will no longer be accessible.
/// - allowed contexts: Call, Response
/// - call slot_a: buffer id
pub const TY_BUFFER_FREE: usize = 0x8002;
/// Request access to an existing buffer.
/// - allowed contexts: Call, Response
/// - call slot_a: buffer id
/// - msg slot_a: buffer id
/// - msg slot_b: buffer ptr
/// - msg slot_c: buffer len
pub const TY_BUFFER_ACCESS: usize = 0x8003;
/// Request additional space be reserved for appending to buffer.
/// - allowed contexts: Call, Response
/// - call slot_a: buffer id
/// - call slot_b: additional length
pub const TY_BUFFER_RESERVE: usize = 0x8004;
/// Request existing buffer be extended with provided additional bytes.
/// - allowed contexts: Call, Response
/// - call slot_a: buffer id
/// - call slot_b: additional bytes ptr
/// - call slot_c: additional bytes len
pub const TY_BUFFER_EXTEND: usize = 0x8005;
/// Request access to bytes at beginning of existing buffer, advancing the
/// read cursor.
/// - allowed contexts: Call, Response
/// - call slot_a: buffer id
/// - call slot_b: max read length
/// - msg slot_a: buffer ptr
/// - msg slot_b: buffer len
pub const TY_BUFFER_READ: usize = 0x8006;
/// Request a new peer connection be opened.
/// - allowed contexts: Call, Response
/// - call slot_a: config buffer id
/// - msg slot_a: peer_con id
pub const TY_PEER_CON_ALLOC: usize = 0x9001;
/// Request an existing peer con be closed and released.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
pub const TY_PEER_CON_FREE: usize = 0x9002;
/// Request an existing peer con create an offer.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: config buffer id
/// - msg slot_a: offer buffer id
pub const TY_PEER_CON_CREATE_OFFER: usize = 0x9003;
/// Request an existing peer con create an answer.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: config buffer id
/// - msg slot_a: answer buffer id
pub const TY_PEER_CON_CREATE_ANSWER: usize = 0x9004;
/// Request an existing peer con set local description.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: desc buffer id
pub const TY_PEER_CON_SET_LOCAL_DESC: usize = 0x9005;
/// Request an existing peer con set rem description.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: desc buffer id
pub const TY_PEER_CON_SET_REM_DESC: usize = 0x9006;
/// Request an existing peer con add ice candidate.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: ice buffer id
pub const TY_PEER_CON_ADD_ICE_CANDIDATE: usize = 0x9007;
/// Request an existing peer con create a new data channel.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - call slot_b: config buffer id
pub const TY_PEER_CON_CREATE_DATA_CHAN: usize = 0x9008;
/// Request an existing peer con be closed and released.
/// - allowed contexts: Call, Response
/// - call slot_a: peer_con id
/// - msg slot_a: stats buffer id
pub const TY_PEER_CON_STATS: usize = 0x9009;
/// OnICECandidate event on an existing peer con.
/// - allowed contexts: Event
/// - msg slot_a: peer_con id
/// - msg slot_b: ice buffer id
pub const TY_PEER_CON_ON_ICE_CANDIDATE: usize = 0x9801;
/// OnConStateChange event on an existing peer con.
/// - allowed contexts: Event
/// - msg slot_a: peer_con id
/// - msg slot_b: state id
pub const TY_PEER_CON_ON_STATE_CHANGE: usize = 0x9802;
/// OnDataChannel event on an existing peer con.
/// - allowed contexts: Event
/// - msg slot_a: peer_con id
/// - msg slot_b: data_chan id
pub const TY_PEER_CON_ON_DATA_CHANNEL: usize = 0x9803;
/// Request an existing data chan be closed and released.
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
pub const TY_DATA_CHAN_FREE: usize = 0xa002;
/// Request the ready state of an existing data channel..
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
/// - msg slot_a: ready state
pub const TY_DATA_CHAN_READY_STATE: usize = 0xa003;
/// Request an existing data chan send data to the remote end.
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
/// - call slot_b: buffer id
/// - msg slot_a: cur buffer amount
pub const TY_DATA_CHAN_SEND: usize = 0xa004;
/// Request the label of an existing data channel.
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
/// - msg slot_a: label buffer id
pub const TY_DATA_CHAN_LABEL: usize = 0xa005;
/// Set the buffered amount low threshold on an existing data channel.
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
/// - call slot_b: threshold
/// - msg slot_a: cur buffer amount
pub const TY_DATA_CHAN_SET_BUFFERED_AMOUNT_LOW_THRESHOLD: usize = 0xa006;
/// Get the amount of send data currently buffered on an existing data channel.
/// - allowed contexts: Call, Response
/// - call slot_a: data_chan id
/// - msg slot_a: cur buffer amount
pub const TY_DATA_CHAN_BUFFERED_AMOUNT: usize = 0xa007;
/// OnClose event on an existing data chan.
/// - allowed contexts: Event
/// - msg slot_a: data_chan id
pub const TY_DATA_CHAN_ON_CLOSE: usize = 0xa801;
/// OnOpen event on an existing data chan.
/// - allowed contexts: Event
/// - msg slot_a: data_chan id
pub const TY_DATA_CHAN_ON_OPEN: usize = 0xa802;
/// OnError event on an existing data chan.
/// - allowed contexts: Event
/// - msg slot_a: data_chan id
/// - msg slot_b: data ptr
/// - msg slot_c: data len
pub const TY_DATA_CHAN_ON_ERROR: usize = 0xa803;
/// OnMessage event on an existing data chan.
/// - allowed contexts: Event
/// - msg slot_a: data_chan id
/// - msg slot_b: data ptr
/// - msg slot_c: data len
pub const TY_DATA_CHAN_ON_MESSAGE: usize = 0xa804;
/// OnBufferedAmountLow event on an existing data chan.
/// - allowed contexts: Event
/// - msg slot_a: data_chan id
pub const TY_DATA_CHAN_ON_BUFFERED_AMOUNT_LOW: usize = 0xa805;