const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.end(req.headers['user-agent']);
});

server.listen(3000, () => {
	console.log('Serwer działa na porcie 3000');
});