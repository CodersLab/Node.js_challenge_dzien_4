const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('Ktoś puka do drzwi back-endu!');
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});