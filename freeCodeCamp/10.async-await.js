// Encadenando promesas


function ordenarProducto(producto) {
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



/* ordenarProducto(producto)
.then(respuesta => {
  console.log(`Respuesta recibida : ${respuesta}`)
  return procesarPedido(respuesta)
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada)
    })
    .catch(error => {
      console.error(error)
      }) */
     
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto)
    console.log('Respuesta recibida')
    console.log(respuesta)
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuestaProcesada)
  }
  catch (error) {
    console.log(error)
  }
}
      
// producto = 'taza'
producto = 'lapiz'
realizarPedido(producto)