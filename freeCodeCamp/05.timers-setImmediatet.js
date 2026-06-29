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
},4000)