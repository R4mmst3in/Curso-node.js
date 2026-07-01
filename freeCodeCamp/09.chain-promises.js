// Encadenando promesas


function ordenarProductos(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando producto: ${producto}`)
    setTimeout(() => {
      if (producto == 'taza') {
        resolve('Ordenando una taza...')
      }
      else {
        reject('Producto no disponible...')
      }
    }, 2000)
  })
}

function procesarPedido(respuesta) {
  return new Promise (resolve => {
    console.log('Procesando respuesta...')
    console.log(`Respuesta: "${respuesta}"\n`)
    setTimeout(()=> {
      resolve('Gracias por su compra....\n')
    }, 4000)
  })
  
}



producto = process.argv[2]

ordenarProductos(producto)
.then(respuesta => {
  console.log(`Respuesta recibida : ${respuesta}`)
  return procesarPedido(respuesta)
})
.then(respuestaProcesada => {
  console.log(respuestaProcesada)
})
.catch(error => {
  console.error(error)
})
