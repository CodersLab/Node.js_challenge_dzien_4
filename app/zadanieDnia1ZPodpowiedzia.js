const http=require('http');

const srv = http.createServer((req, res) => { //Kiedy przeglądarka wysyła zapytanie...
    res.setHeader("Content-Type","text/html; charset=utf-8"); //...następuje ustawienie odpowiedniego kodowania...
    res.end("Hello, World from back-end!"); //...oraz przesłanie odpowiedzi.
});
srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
//Coś tu powinno być...