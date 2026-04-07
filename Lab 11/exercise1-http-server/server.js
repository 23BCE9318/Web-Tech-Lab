// Exercise 1: Node.js HTTP Server (no external frameworks)

// Import built-in http module
const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

// Create server using createServer() with request-response callback
const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(`[REQUEST] Method: ${method} | URL: ${url} | Time: ${new Date().toISOString()}`);

  // Set response headers
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Powered-By', 'Node.js');

  // Route handling based on URL
  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.write('<html><body>');
    res.write('<h1>Welcome to Node.js HTTP Server!</h1>');
    res.write('<p>This server is built using the built-in <b>http</b> module only.</p>');
    res.write('<ul>');
    res.write('<li><a href="/about">About</a></li>');
    res.write('<li><a href="/contact">Contact</a></li>');
    res.write('</ul>');
    res.write('</body></html>');
    res.end();

  } else if (url === '/about' && method === 'GET') {
    res.statusCode = 200;
    res.write('<html><body>');
    res.write('<h1>About Page</h1>');
    res.write('<p>This is a simple Node.js server without any frameworks.</p>');
    res.write('<a href="/">Back to Home</a>');
    res.write('</body></html>');
    res.end();

  } else if (url === '/contact' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'Lab Student', email: 'student@vitap.ac.in' }));

  } else {
    // 404 - Not Found
    res.statusCode = 404;
    res.write('<html><body>');
    res.write('<h1>404 - Page Not Found</h1>');
    res.write('<a href="/">Go Home</a>');
    res.write('</body></html>');
    res.end();
  }
});

// Start the server on the specified port
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
  console.log('Open the URL in your browser to test!');
  console.log('Press Ctrl+C to stop the server.\n');
});
