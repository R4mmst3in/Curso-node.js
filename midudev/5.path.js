path = require('node:path')

console.log('path.separator:', path.sep)

//Unir rutas con path con join. Pone up sep entre cada elemento de la ruta.

const filePath = path.join('/content','subfolder','archivo.txt')
console.log('filePath:', filePath)

// basename: devuelve el nombre del archivo de una ruta

const nombreFichero = path.basename('/tmp/directorio1/directorio2/archivo.txt')
console.log('El fichero se llama:', nombreFichero)

// Podemos decirle que nos elimine la extension del fichero con un segundo parámetro

const nombreFicheroSinExtension = path.basename('/tmp/directorio1/directorio2/archivo.txt','.txt')
console.log('El fichero se llama:', nombreFicheroSinExtension)

const extensionFichero = path.extname('/tmp/directorio1/directorio2/archivo.txt')
console.log('La extensión del fichero es:', extensionFichero)