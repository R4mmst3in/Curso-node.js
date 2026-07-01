// Modulo events

const EventEmitter = require('events')

// console.log(EventEmitter)

const emissorProductos = new EventEmitter()
const accion = process.argv[2]

// Cuando se produzca un evento llamado compra ejecuta una determinanda funcion
// Eso se hace con .on

emissorProductos.on('compra', (total, numProductos) => {
  console.log(`Se realizo una compra por valor de $${total}`)
  console.log(`Numero de productos: ${numProductos}`)
})

// Con .emit emitimos un evento.
if (accion == 'compra') {
  emissorProductos.emit(accion, 500, 10)
} else {
  console.log('Accion incorrecta')
}

