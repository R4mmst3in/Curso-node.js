const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require ('picocolors')

const folder = process.argv[2] ?? '.'


async function listaDirectorio(folder) {

  let files

  try{
    files = await fs.readdir(folder)
  } catch (err) {
    if (err) {
      console.error(pc.bgRed('Error al leer el directorio:', err))
      process.exit(1)
    }
  }

  // Creamos las promesas de obtencion de informacion del fichero/directorio

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)   // Informacion del fichero/Directorio
      
    } catch {
      console.error(`Error al leer el fichero ${filePath}`)
      process.exit(1)
    }
    
    // Si llegamos hasta aqui es que ya podemos recuperar informacion

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModify = stats.mtime.toLocaleString()

    return `${pc.green(fileType)} ${pc.cyan(file.padEnd(28))} ${pc.red(fileSize.padEnd(5))} ${pc.yellowBright(fileModify)})`
  })

  // Esperamos a que se terminen todas las promesas del map
  
  const filesInfo = await Promise.all(filesPromises)

  // filesInfo es resultado del map por lo que hay que recorrerlo con un forEach
  
  filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
  })

}

listaDirectorio(folder)