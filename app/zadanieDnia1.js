//Twój kod
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html; charset=utf8');
  res.end('Hello, World from back-end!');
});

server.listen(3000);