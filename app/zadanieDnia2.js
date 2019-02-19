//Twój kod
const http = require('http');

const srv = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    console.log('brower info: ', userAgent);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<h2>current browser info: </h2> 
    <p>${userAgent}</p>`)
})

srv.listen(3000, () => {
    console.log('Serwer działa na http://localhost:3000/')
})