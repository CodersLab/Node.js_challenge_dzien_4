const http = require("http");

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Preferowane języki: " + acceptLanguage);
});

srv.listen(3000, () => {
    console.log("Serwer działa...");
});