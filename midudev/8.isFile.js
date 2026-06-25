const { lstat } = require('node:fs')
const fs = require('node:fs/promises')

const file = process.argv[2]

fs.stat(file, (err, stats) => {
  if (err) {
    console.error('Error al obtener información del archivo:', err)
    return
  }

}).then((data) => {
    const isFile = data.isFile()
    const isDirectory = data.isDirectory()
    if (isFile) {
      console.log(`${file} es un fichero`)
    } else if (isDirectory) {
      console.log(`${file} es un directorio`) 
    }
}
)