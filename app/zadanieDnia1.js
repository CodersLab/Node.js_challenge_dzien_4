const http = require('http');

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    const accept = req.headers['accept'];
    console.log('Preferowane języki:', acceptLanguage,
        '\n info o systemie i przeglądarce użytkownika: ', userAgent,
        '\n Treści preferowane przez przeglądarkę: ', accept);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('<html><body><h1>Hello, World from back-end!</h1></body></html>');
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
