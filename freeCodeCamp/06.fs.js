<<<<<<< HEAD
// Modulo que provee funcionalidad
// con el sistema de fichero incluido carpetas
// Todos los metodos son ASINCRONOS por defecto

const fs = require ('node:fs')

sourceFs = process.argv[2]
targetFs = process.argv[3]

console.log('Antes de leer el archivo...')

fs.readFile(sourceFs, 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido)
})

console.log('Despues de leer el archivo...')

fs.rename(sourceFs, targetFs, (err) => {
  if (err)
    throw err
  console.log('Nombre renombrado correctamente')
})

console.log('Despues de renombrar el archivo...')


// Agregar contenido al final de un archivo

fs.appendFile(targetFs, '<p>Hola desde Node.js</p>', (err) => {
  if (err)
    throw (err)
  console.log('Archivo actualizado')
})

console.log('Despues de añadir informacion al archivo...')

// Reemplazar todo el contenido de un archivo

fs.writeFile(targetFs, '<h1>Archivo reemplazo completamente</h1><p>Si no existe, lo crea</p>', (err) => {
  if(err)
    throw (err)
  console.log('Archivo sustituido')
})

console.log('Despues de remplazar el archivo...')

// Eliminar un archivo

fs.unlink(targetFs,(err) => {
  if (err)
    throw(err)
  console.log('Archivo eliminado')
})

=======
// Modulo que provee funcionalidad
// con el sistema de fichero incluido carpetas
// Todos los metodos son ASINCRONOS por defecto

const fs = require ('node:fs')

sourceFs = process.argv[2]
targetFs = process.argv[3]

console.log('Antes de leer el archivo...')

fs.readFile(sourceFs, 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido)
})

console.log('Despues de leer el archivo...')

fs.rename(sourceFs, targetFs, (err) => {
  if (err)
    throw err
  console.log('Nombre renombrado correctamente')
})

console.log('Despues de renombrar el archivo...')


// Agregar contenido al final de un archivo

fs.appendFile(targetFs, '<p>Hola desde Node.js</p>', (err) => {
  if (err)
    throw (err)
  console.log('Archivo actualizado')
})

console.log('Despues de añadir informacion al archivo...')

// Reemplazar todo el contenido de un archivo

fs.writeFile(targetFs, '<h1>Archivo reemplazo completamente</h1><p>Si no existe, lo crea</p>', (err) => {
  if(err)
    throw (err)
  console.log('Archivo sustituido')
})

console.log('Despues de remplazar el archivo...')

// Eliminar un archivo

fs.unlink(targetFs,(err) => {
  if (err)
    throw(err)
  console.log('Archivo eliminado')
})

>>>>>>> ec3c196c631670c99bd5a84f28bc61563c4a848e
console.log('Despues de eliminar el archivo...')