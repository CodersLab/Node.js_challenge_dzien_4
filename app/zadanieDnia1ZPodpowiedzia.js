//Coś tu powinno być

const srv = http.createServer((req, res) => { //Kiedy przeglądarka wysyła zapytanie...
    res.setHeader('???', '???'); //...następuje ustawienie odpowiedniego kodowania...
    res.end('???'); //...oraz przesłanie odpowiedzi.
});

//Coś tu powinno być