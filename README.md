<img alt="Logo" src="https://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Node.js challenge

Witaj w challengu Node.js, gdzie codziennie przez 7 dni zdobędziesz konkretną dawkę informacji dotyczących Node.js oraz wykorzystasz ją w praktyce. **Pamiętaj żeby wykonywać dni challengu po kolei - od dnia pierwszego do ostatniego** (dzięki temu Twoja wiedza będzie poukładana i kompletna).

Każdy dzień to jeden temat przewodni. W jego ramach **stworzysz aplikację Node.js, która faktycznie będzie potrafiła coś zrobić** - od razu zobaczysz wynik swojej pracy.

___

> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

**Do pełnego i satysfakcjonującego doświadczania tego challengu jest potrzebna znajomość JavaScript z elementami ES6.** Jeżeli potrzebujesz informacji z zakresu ES6 to znajdziesz je tutaj: [*tutorial ES6*][es6-tutorial].

## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

## Plan challengu

* Pierwszy dzień to wstęp do Twojej przygody z Node.js - dowiesz się w jaki sposób przygotować środowisko oraz jak pisać i testować programy Node.js.
* W kolejnych dniach dowiesz się w jaki sposób za pomocą Node.js wchodzić w interakcję z systemem operacyjnym (np. modyfikować pliki czy dokonywać szyfrowania).
* Druga część challengu jest poświęcona tworzeniu back-endu - dowiesz się jak stworzyć własny serwer.
* Pod koniec doświadczysz roli full-stack developera - stworzysz komunikujący się ze sobą front-end i back-end.  

___

# Dzień 4: Pierwszy serwer back-endowy

## Jak działa komunikacja HTTP?

Żeby napisać własny back-end musimy sobie odpowiedzieć na pytanie: w jaki sposób działa komunikacja przeglądarki z back-endem? Używany jest protokół `HTTP` - pozwala on niejako na rozmowę strony klienckiej (front-end) z serwerową (back-end).

Całość wygląda np. tak:

<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Prj1.jpeg" alt="Komunikacja HTTML" width="450" />

Podczas komunikacji przesyłane są dwie części informacji: jedna to tzw. _nagłówki_ (z ang. _headers_), druga to _zawartość_ (z ang. _content_). Znasz już tę drugą część, zawartość to np. plik HTML, CSS, czy JS.

Cała komunikacja wygląda tak:

1. Klient przesyła zapytanie do serwera. Składa się ono z nagłówków (np. informuje jakiego adresu oczekuje przeglądarka) oraz ew. treści (znasz to np. z AJAXa, gdzie można przesyłać pewne dane).
2. Serwer odbiera dane i przesyła do klienta w odpowiedzi również nagłówki (informujące np. o statusie - czy wszystko poszło ok) oraz treść - np. dokument HTML.

Nagłówki to specjalnie informacje, inne znajdują się w zapytaniu, np.: metoda HTTP i zasób który chcemy uzyskać (to jest pierwszy nagłówek), informacje o istniejących ciasteczkach, przeglądarce użytkownika.

Inne znajdą się w odpowiedzi: m.in. status odpowiedzi (to jest pierwszy nagłówek), dodaniem nowych ciasteczek, wielkości i typie odpowiedzi.

Oto przykład całej odpowiedzi wraz z nagłówkami:

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Prj8.jpeg" alt="Odpowiedź serwera" width="400">

> PS. Wspominamy wyżej o statusie odpowiedzi - informuje on czy wszystko przebiegło pomyślnie i co się stało - to 3-cyfrowy numer.
> 
> Wiesz, że ktoś zrobił kocią wersję nagłówków HTTP? Jak [chcesz to zobacz jak wyglądają][httpcats], jest też [wersja dla fanów psiaków][httpdogs] :)

Po tym krótkim teoretycznym wstępie przejdziemy do praktyki :)

## Moduł `http`

Poznamy teraz kolejny moduł Node.js, a mianowicie `http`. Jest on zbiorem możliwości operowania na sieci. Służy zarówno do tworzenia back-endu, pobierania danych z innego miejsca (czyli może działać jako serwer i klient), jak i posiada inne funkcjonalności. Aby go zaimportować tradycyjnie używamy:

```JavaScript
const http = require('http');
```

## Stwórzmy serwer - czyli swój back-end!

Do stworzenia serwera posłuży nam funkcja... `http.createServer(callbackZapytania)` :) Nazwa dokładnie podpowiada nam efekt jaki chcemy osiągnąć.

Funkcja callback w środku działa nieco inaczej niż wcześniej poznane przez Ciebie funkcje callback. **Przyjmuje ona dwa obiekty - reprezentujące zapytanie oraz odpowiedź.** Omówimy je dokładniej za chwilę. Całość może wyglądać np. tak:

```JavaScript
const http = require('http');

const srv = http.createServer((req, res) => {
  //Tutaj będziemy chcieli odsyłać odpowiedzi do front-endu
});
``` 

Uruchomienie takiego kodu spowoduje... natychmiastowe zamknięcie naszej aplikacji. To dlatego, że brakuje nam "nasłuchiwania" czyli przyjmowania połączeń przychodzących. W praktyce sprowadza się to do uruchomienia jeszcze jednej ważnej metody naszego serwera, czyli `srv.listen(port, callbackUruchomienia)`.

Jako pierwszy parametr musimy podać liczbę oznaczającą port - czyli "miejsce" z jakiego będzie dostępna nasza aplikacja. Domyślnym portem jest `80` (czyli adres http://example.com to w rzeczywistości http://example.com:80), jednak jest on zajęty na większości komputerów. Przyjęło się, że **w Node.js korzystamy z portu `3000`.** 

Drugi parametr `srv.listen()` to po prostu callback, który zostanie wywołany po uruchomieniu serwera. Oto kompletny kod:

```JavaScript
const http = require('http');

const srv = http.createServer((req, res) => {
  //Tutaj będziemy chcieli odsyłać odpowiedzi do front-endu
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
``` 

Po uruchomieniu takiego kodu Node.js nie kończy procesu. To ciekawe biorąc pod uwagę, że nie mamy nigdzie żadnego setTimeout(), ani setInterval(), prawda? Node słusznie domyśla się, że jeżeli uruchamiamy serwer, to chcemy żeby działał on cały czas :) Jeżeli chcemy zamknąć go ręcznie to w linii komend/terminalu klikamy `Ctrl+C`.

## Testujemy!

Aby przetestować swój serwer odwiedź w przeglądarce adres [`localhost:3000`][localhost] lub [`127.0.0.1:3000`][localhost127].

Po otwarciu przeglądarka prawdopodobnie będzie wczytywała stronę w nieskończoność :) To dobry znak - udało się nawiązać połączenie przeglądarki z serwerem. Jednak nasz back-end jest póki co dosyć ubogi i nie robi nic więcej - zaraz coś na to zaradzimy!

## Obsługa zapytań w back-endzie

Przy okazji funkcji `http.createServer()` mówiliśmy, że przyjmuje callback uruchamiany za każdym razem gdy Twój serwer otrzyma zapytanie. Tak faktycznie jest i można to sprawdzić dodając do środka tej funkcji `console.log`:

```JavaScript
const http = require('http');

const srv = http.createServer((req, res) => {
  console.log('Ktoś puka do drzwi back-endu!');
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
``` 

Taki kod nie spowoduje co prawda (jeszcze), że przeglądarka cokolwiek wyświetli. Natomiast każde odświeżenie strony w przeglądarce spowoduje wypisanie w linii komend/terminalu odpowiedniej informacji.

Teraz aby zrobić coś więcej posłużymy się dwoma parametrami: `req` - reprezentujący zapytanie (od ang. _request_) i `res` reprezentujący odpowiedź (od ang. _response_).

## Podstawy obiektu `req`

Spróbujmy najpierw odczytać kilka informacji przesyłanych przez przeglądarkę. Aby to zrobić posłużymy się właściwością `req.headers`. Jest to obiekt, w którym klucze to nazwy nagłówków przesłanych przez przeglądarkę.

Oto kilka ciekawych nagłówków:

- `'accept-language'` - informacja jakie języki preferuje użytkownik przeglądarki;
- `'user-agent'` - informacje na temat systemu i przeglądarki użytkownika;
- `'accept'` - informacja jakiego rodzaju treści preferuje przeglądarka.

Np. taki kod:

```JavaScript
const http = require('http');

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    console.log('Preferowane języki:', acceptLanguage);
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
``` 

wyświetli w konsoli preferowane jezyki podczas odświeżania strony w przeglądarce.

Aby odczytać metodę HTTP możesz użyć właściwości `req.method`. Teraz nie jest Ci to potrzebne, ale przyda się gdy zaczniesz używać np. AJAXa.

## Podstawy obiektu `res`

Aby móc cokolwiek wypisać potrzebujemy skorzystać z drugiego parametru - `res`. Aby cokolwiek wysłać do przeglądarki możemy użyć metody `res.end(wiadomoscTypuString)`.

Aby przesłać nagłowek trzeba pamiętać o dwóch rzeczach:

1. Użyj metody `res.setHeader(nazwaNaglowka, zawartoscNaglowka)`, aby ustawić nagłówek.
2. Najpierw przesyłaj nagłówki, dopiero potem treść w `res.end()`!

Przykładowo aby móc wyświetlać PL znaki w przeglądarce użyjemy:

```JavaScript
    res.setHeader("Content-Type", "text/html; charset=utf-8");
```

Ta regułka mówi o tym, że zwracamy HTML i że kodujemy go w UTF-8.

**Nie zobaczysz tutaj całego kodu, który powita przeglądarkę. Dzisiejszym challengem jest złożenie przez Ciebie tych informacji samemu :)** (spokojnie, będą podpowiedzi) 

Jak widzisz - początki pisania back-endu nie są takie kolorowe - to dużo pisania i trochę teorii. Nie martw się - **w praktyce i codziennej pracy po dobrym poznaniu tego modułu używa się znacznie wygodniejszych możliwości (zbudowanych na module `http`, ale go ukrywającyh).**

# Ćwiczenia

> Ćwiczenia wykonuj w odpowiednich plikach. W folderze `app` są one ponumerowane tak samo jak poniżej - zadaniu `1. Rozgrzewka` odpowiada plik `app/zadanie01.js` itd.
> Aby uruchomić zadanie podaj jego nazwę (pamiętaj, aby linia komend/terminal był otwarty na katalogu `app` tego repozytorium), np.:
> ```cmd
> node ./zadanie01.js
> ```

## Zadanie dnia 1: Hello, World from back-end!

Stwórz back-end, który wyświetli w przeglądarce użytkownika po wejściu np. na `localhost:3000` napis `Hello, World from back-end!`.

To będzie Twój pierwszy - póki co dosyć prosty - back-end, który faktycznie coś zwraca :)

> Jeżeli masz problem z tym zadaniem to w pliku `app/zadanieDnia1ZPodpowiedzia.js` znajdziesz wskazówki.

## Zadanie dnia 2: Cześć, przeglądarko

Spróbuj zmodyfikować powyższy kod w taki sposób, aby zwracać przeglądarce tekst na temat jej samej.

> Podpowiedź: chodzi o odczyt nagłówka `'user-agent'`. 

**To wszystko na dziś - gratulacje! Do jutra :)**


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[es6-tutorial]: http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
[download-node]: https://nodejs.org/en/download/
[localhost]: http://localhost:3000
[localhost127]: http://127.0.0.1:3000
[httpcats]: http://http.cat/
[httpdogs]: https://httpstatusdogs.com/