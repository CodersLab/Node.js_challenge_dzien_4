const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.end('Hello world!');
});

server.listen(3000, () => {
	console.log('Server działa na porcie 3000');
});