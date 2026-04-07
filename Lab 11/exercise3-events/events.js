// Exercise 3: Event-Driven Programming using Node.js EventEmitter

// Import built-in events module
const EventEmitter = require('events');

// Create an EventEmitter instance
const emitter = new EventEmitter();

console.log('=== Node.js Event-Driven Programming Demo ===\n');

// ─── Register Listeners ───────────────────────────────────────────────────────

// Listener 1: Single listener for 'greet' event
emitter.on('greet', (name) => {
  console.log(`[LISTENER 1 - greet] Hello, ${name}! Welcome to Node.js Events.`);
});

// Listener 2: Second listener on same 'greet' event (multiple listeners demo)
emitter.on('greet', (name) => {
  console.log(`[LISTENER 2 - greet] Nice to meet you, ${name}! (Multiple listeners work!)`);
});

// Listener for 'login' event - receives an object as data
emitter.on('login', (user) => {
  console.log(`[LOGIN] User logged in → Name: ${user.name}, Role: ${user.role}, Time: ${user.time}`);
});

// Listener for 'error' event - best practice to always handle 'error'
emitter.on('error', (err) => {
  console.error(`[ERROR EVENT] Something went wrong: ${err.message}`);
});

// Listener for 'dataReceived' event
emitter.on('dataReceived', (data) => {
  console.log(`[DATA] Received data payload: ${JSON.stringify(data)}`);
});

// One-time listener using .once() - fires only on first emit
emitter.once('startup', () => {
  console.log('[STARTUP] Server started! (This fires only ONCE even if emitted again)');
});

// ─── Emit Events ─────────────────────────────────────────────────────────────

console.log('--- Emitting events ---\n');

// Emit 'startup' (once listener)
emitter.emit('startup');
emitter.emit('startup'); // Will NOT fire again

// Emit 'greet' with data - triggers both listeners
emitter.emit('greet', 'Alice');

// Emit 'login' with an object
emitter.emit('login', {
  name: 'Bob',
  role: 'admin',
  time: new Date().toLocaleTimeString(),
});

// Emit 'dataReceived' with structured data
emitter.emit('dataReceived', { temperature: 36.6, humidity: 72, sensor: 'A1' });

// Emit 'error' event
emitter.emit('error', new Error('Simulated error for demonstration'));

// ─── Show listener count ──────────────────────────────────────────────────────
console.log(`\n[INFO] Listeners registered for 'greet': ${emitter.listenerCount('greet')}`);
console.log(`[INFO] Listeners registered for 'login': ${emitter.listenerCount('login')}`);

// ─── Async simulation using setTimeout (event-driven async behavior) ─────────
console.log('\n--- Async Event Demo (setTimeout simulates async) ---');

setTimeout(() => {
  console.log('[ASYNC] Emitting delayed event after 1 second...');
  emitter.emit('greet', 'Charlie (async)');
}, 1000);

console.log('[MAIN] This line prints BEFORE the async event — demonstrating async behavior!');
