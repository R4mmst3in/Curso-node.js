<<<<<<< HEAD
// Modulo que provee funcionalidad
// con el sistema de fichero incluido carpetas
// En este caso vamos a usar los metodos SINCRONOS de los
// que ya usamos en 06.fs.js


const fs = require ('node:fs')

sourceFs = process.argv[2]
targetFs = process.argv[3]

console.log('Antes de leer el archivo...')

const contenido = fs.readFileSync(sourceFs, 'utf-8')
console.log(contenido)

console.log('Despues de leer el archivo...')

fs.renameSync(sourceFs, targetFs)

console.log('Despues de renombrar el archivo...')


// Agregar contenido al final de un archivo

fs.appendFileSync(targetFs, '<p>Hola desde Node.js</p>')

console.log('Despues de añadir informacion al archivo...')

// Reemplazar todo el contenido de un archivo

fs.writeFileSync(targetFs, '<h1>Archivo reemplazo completamente</h1><p>Si no existe, lo crea</p>')

console.log('Despues de remplazar el archivo...')

// Eliminar un archivo

fs.unlinkSync(targetFs)

=======
// Modulo que provee funcionalidad
// con el sistema de fichero incluido carpetas
// En este caso vamos a usar los metodos SINCRONOS de los
// que ya usamos en 06.fs.js


const fs = require ('node:fs')

sourceFs = process.argv[2]
targetFs = process.argv[3]

console.log('Antes de leer el archivo...')

const contenido = fs.readFileSync(sourceFs, 'utf-8')
console.log(contenido)

console.log('Despues de leer el archivo...')

fs.renameSync(sourceFs, targetFs)

console.log('Despues de renombrar el archivo...')


// Agregar contenido al final de un archivo

fs.appendFileSync(targetFs, '<p>Hola desde Node.js</p>')

console.log('Despues de añadir informacion al archivo...')

// Reemplazar todo el contenido de un archivo

fs.writeFileSync(targetFs, '<h1>Archivo reemplazo completamente</h1><p>Si no existe, lo crea</p>')

console.log('Despues de remplazar el archivo...')

// Eliminar un archivo

fs.unlinkSync(targetFs)

>>>>>>> ec3c196c631670c99bd5a84f28bc61563c4a848e
console.log('Despues de eliminar el archivo...')