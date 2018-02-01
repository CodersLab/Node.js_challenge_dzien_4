const http = require('http');

const srv = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<ul>
    <li>Preferowane języki: ${req.headers['accept-language']}</li>
    <li>User-agent: ${req.headers['user-agent']}</li>
    <li>Accept: ${req.headers['accept']}</li>
  </ul>`);
});

srv.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
