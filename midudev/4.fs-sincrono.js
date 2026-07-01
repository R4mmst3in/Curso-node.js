const fs = require('fs');

data = fs.readFileSync('archivo.txt', 'utf-8');
console.log(data);

console.log('Procesando resto de ordenes...');

data2 = fs.readFileSync('archivo2.txt', 'utf-8');
console.log(data2);