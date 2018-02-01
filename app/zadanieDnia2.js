//Twój kod
const http = require('http');

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    console.log('Preferowane języki:', acceptLanguage);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<h1>Hello, World from back-end!"</h1>
        <table>
        <tr><th>Preferowane języki</th><th>Przeglądarka</th></tr>
        <tr><td>${acceptLanguage}</td><td>${userAgent}</td></tr>
        </table>`)
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});