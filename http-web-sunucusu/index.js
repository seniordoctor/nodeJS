// http module
const http = require('http');

// http.createServer metodu ile http sunucusu oluşturduk (req, res) 2 arguman aldı
const server = http.createServer((req, res) => {

    // req.url ile birlikte gelen URL'in hangi sayfaya ait oldugu bulunur
    const url = req.url;

    // eger url '/' ise;
    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('INDEX SAYFASI');
    }
    else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('ABOUT SAYFASI');
    }
    else if (url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('CONTACT SAYFASI');
    }
    // eger url yukarıdakiler birisi degil ise 404 http durum kodu ver
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 SAYFA BULUNAMADI</h1>');
    }
    
    // res.end() metodu ile yanıt islem sonlanır
    res.end();
});

const port = 3000

// sunucu 3000 port ile server.listen() metodu ile dinlemeye baslatılır
// basladıgında sunucu port 3000'de baslatıldı mesajı verir.
server.listen(port, () => {
    console.log(`Sunucu port ${port}'de başlatıldı.`);
});