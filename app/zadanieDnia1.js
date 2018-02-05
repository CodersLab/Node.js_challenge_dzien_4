//Twój kod

const http = require('http');
const server = http.createServer((request,response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.end('Hello world from back-end!');

});

server.listen(3000,() => {
  console.log('Serwer http uruchomiony na porcie 3000.');
});
