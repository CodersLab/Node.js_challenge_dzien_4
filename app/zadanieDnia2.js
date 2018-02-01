const http = require('http');

const srv = http.createServer((req, res) => {
    const browser = req.headers['user-agent'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('<h1>Hello ' + browser + '</h1>');
});

srv.listen(3000, () => {
console.log("Serwer wystartowal");
});