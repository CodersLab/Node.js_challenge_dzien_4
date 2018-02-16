const http = require('http');

const srv = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    const accept = req.headers['accept'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('<h1>Cześć przeglądarko!</h1>'+ '<p>Oto trochę informacji o Tobie: </p>' + userAgent + '<p>To są treści, jakie preferujesz: </p>' + accept);
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
