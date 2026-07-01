

// Define el status del pedido
const statusPedido = (()=>{
  // Generamos numeros aleatorios para reprensentar los pedidos al azar
  const status = Math.random() < 0.8
  // console.log(status)
  return status           // Nos devuelve true o false
})

const pedidoPizza = new Promise ((resolve, reject) => {
  setTimeout (()=>{
    if (statusPedido()) {
      resolve('Pedido realizado')
    } else {
      reject('Pedido rechazado')
    }
  },3000)
})

/* const handlerPedidoCorrecto = (valor) => {
  console.log(valor)
}

const handlerPedidoIncorrecto = (err) => {
 console.error(err)
}

pedidoPizza
.then(handlerPedidoCorrecto, handlerPedidoIncorrecto) */

pedidoPizza
.then((valor) => {
  console.log(valor)
})
.catch((err) => {
  console.error(err)
})