const http = require('http');

const server = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(userAgent);
});

server.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});