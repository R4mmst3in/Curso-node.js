const fs = require('node:fs/promises');

fs.readFile('archivo.txt', 'utf-8').
then(
    (data) => {console.log(data)}
)
console.log('Procesando resto de ordenes...')

fs.readFile('archivo2.txt','utf-8').
then((data)=> {console.log(data)})