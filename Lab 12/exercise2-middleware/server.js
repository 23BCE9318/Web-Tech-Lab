const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

// ─── Middleware 1: Logger (application-level) ───────────────────────────────
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[LOGGER] ${timestamp} | Method: ${req.method} | URL: ${req.url}`);
  next(); // pass to next middleware
});

// ─── Middleware 2: Request Timer ─────────────────────────────────────────────
app.use((req, res, next) => {
  req.startTime = Date.now();
  console.log(`[TIMER] Request started at: ${req.startTime}`);
  next();
});

// ─── Middleware 3: Auth Check (route-level, only for /secure) ────────────────
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(`[AUTH] Checking authorization header...`);
  if (!token || token !== 'Bearer mysecrettoken') {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid or missing token' });
  }
  console.log(`[AUTH] Authorization passed!`);
  next();
};

// ─── Middleware 4: Request Body Logger ───────────────────────────────────────
app.use((req, res, next) => {
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`[BODY] Request body:`, req.body);
  }
  next();
});

// ─── Routes ──────────────────────────────────────────────────────────────────

// Public route - all middleware layers run
app.get('/', (req, res) => {
  const duration = Date.now() - req.startTime;
  console.log(`[RESPONSE] Sending response after ${duration}ms`);
  res.json({
    message: 'Exercise 2: Middleware Demo Server',
    routes: [
      'GET  /          - Public home route',
      'GET  /about     - About page',
      'POST /data      - Accept JSON body',
      'GET  /secure    - Protected route (needs Authorization: Bearer mysecrettoken)',
    ]
  });
});

app.get('/about', (req, res) => {
  const duration = Date.now() - req.startTime;
  console.log(`[RESPONSE] /about responded in ${duration}ms`);
  res.json({ message: 'This is the About page', duration: `${duration}ms` });
});

// Route that accepts a request body
app.post('/data', (req, res) => {
  const duration = Date.now() - req.startTime;
  console.log(`[RESPONSE] /data responded in ${duration}ms`);
  res.json({
    message: 'Data received successfully',
    receivedData: req.body,
    processingTime: `${duration}ms`
  });
});

// Secure route - uses route-level middleware (authMiddleware runs before handler)
app.get('/secure', authMiddleware, (req, res) => {
  const duration = Date.now() - req.startTime;
  console.log(`[RESPONSE] /secure responded in ${duration}ms`);
  res.json({
    message: 'Welcome to the secure route!',
    secret: 'Top secret data here 🔐',
    duration: `${duration}ms`
  });
});

// 404 Handler (runs if no route matched)
app.use((req, res) => {
  console.log(`[404] No route matched for: ${req.method} ${req.url}`);
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Middleware server running on http://localhost:${PORT}`);
  console.log('Watch the console to see middleware execution order!\n');
});
