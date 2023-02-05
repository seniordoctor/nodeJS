// 1- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// 2- Bu veriyi okuyalım. (READ)
// 3- Bu veriyi güncelleyelim.
// 4- Dosyayı silelim.

// fs modulunu kullanmak icin;
const fs = require('fs');

// veri ekledik
fs.appendFile('employees.json', 
'{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('json dosyası oluşturuldu')
})

// employees.json içindeki veriyi okuduk
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data)
    console.log('json dosyası okundu');
});

// employees.json'a yeni veri ekledik
fs.appendFile('employees.json', 
'\n {"name": "Employee 2 Name", "salary": 3333}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('yeni json verisi olusturuldu')
})

// employees.json dosyasını sildik
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('json dosyası silindi')
})