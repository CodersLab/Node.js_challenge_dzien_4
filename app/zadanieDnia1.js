const http = require('http');

const srv = http.createServer((req,res) =>{
  console.log("Someone's at the door!");
  res.setHeader('Content-Type', 'text/html; charset=uft-8');
  res.end("<h1 style='text-align:center;'>Hello, World from back-end!</h1>");
});

srv.listen(3000, () => {
  console.log('Serwer został uruchomiony na porcie 3000!');
})
