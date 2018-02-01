//Twój kod
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request');
  const userAgent = req.headers['user-agent'];
  const accept = req.headers['accept'];

  res.setHeader('Content-type', 'text/html; charset=utf8');
  res.end(
    `<h1>Hi!</h1>
    <h1 style='text-decoration: underline'>Your user-agent is:</h1><h2>${userAgent}</h2>
    <h1 style='text-decoration: underline'>You accept:</h1><h2>${accept}</h2>
    <h1 style='text-decoration: underline'>You used a method:</h1><h2>${req.method}</h2>
    <h1 style='text-decoration: underline'>All there is:</h1><p>${JSON.stringify(req.headers)}</p>`
  );
});

server.listen(3000, () => {
  console.log('server on port 3000');
});