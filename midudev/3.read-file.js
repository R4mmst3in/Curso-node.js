const fs = require('node:fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    console.log(data)
})

console.log('Procesando resto de ordenes...')

fs.readFile('archivo2.txt','utf-8', (err, data) => {
    console.log(data)
})
