<<<<<<< HEAD
// setTimeout()
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(num1, num2) {
  console.log(num1 + num2)
}

// setImmediate()
// Con setImmediate no aseguramos la mayor prioridad una vez que todos los eventos sincronos se ejecutan
// El orden de ejecucion seria linea 13 -> linea 15 y luego linea 14
console.log('Antes de setImmediate()')
setImmediate(sumar, 100, 2000)
console.log('Despues de setImmediate()')

setImmediate (() => {
  mostrarTema('Python')
=======
// setTimeout()
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(num1, num2) {
  console.log(num1 + num2)
}

// setImmediate()
// Con setImmediate no aseguramos la mayor prioridad una vez que todos los eventos sincronos se ejecutan
// El orden de ejecucion seria linea 13 -> linea 15 y luego linea 14
console.log('Antes de setImmediate()')
setImmediate(sumar, 100, 2000)
console.log('Despues de setImmediate()')

setImmediate (() => {
  mostrarTema('Python')
>>>>>>> ec3c196c631670c99bd5a84f28bc61563c4a848e
},4000)