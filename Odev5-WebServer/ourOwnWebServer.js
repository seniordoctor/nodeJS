const http = require('http');

const SERVER = http.createServer((req, res) => {

    const URL = req.url;

    if (URL === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ</h2>');
    }
    else if (URL === '/hakkimda') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>');
    }
    else if (URL === '/iletisim') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 SAYFA BULUNAMADI</h1>');
    }
    
    res.end();
});

const PORT = 5000

SERVER.listen(PORT, () => {
    console.log(`Sunucu port ${PORT}'de başlatıldı.`);
});