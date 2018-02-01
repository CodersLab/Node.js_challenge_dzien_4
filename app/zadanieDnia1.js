//Twój kod

const http = require('http');

const srv = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    let html = `Hello, World from back-end!`;
    res.end(html, 'utf-8')
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});