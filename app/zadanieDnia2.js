const http = require('http');

const srv = http.createServer((req,res) =>{
  console.log("Someone's at the door!");
  const acceptLanguage = req.headers['accept-language'];
  const userAgent = req.headers['user-agent'];
  const accept = req.headers['accept'];
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<ul>'
  + '<li>Preferowane języki: '+ acceptLanguage+'</li>'
  + '<li>System i przeglądarka to: '+ userAgent+'</li>'
  + '<li>Przeglądarka preferuje: '+ accept+'</li>'
  +'</ul>');
});

srv.listen(3000, () =>{
  console.log('Serwer został uruchomiony na porcie 3000!');
});
