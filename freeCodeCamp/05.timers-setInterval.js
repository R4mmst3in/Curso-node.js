// setInterval()
// Ejecuta codigo un numero infinito de veces con un retraso especifico de microsegundos

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(num1, num2) {
  console.log(num1 + num2)
}

// 
setInterval(sumar, 1500, 10, 20)

setInterval(() => {
  mostrarTema('React')
}, 3000)