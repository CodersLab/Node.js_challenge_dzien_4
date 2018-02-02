//Twój kod

const http = require('http');

const srv = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<h1 style='text-align:center; color:blue;'>Hello, World from back-end!</h1>
        <p><b>Preferowane języki:</b> ${req.headers['accept-language']}</p>
        <p><b>User-agent:</b> ${req.headers['user-agent']}</p>`
    );
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});