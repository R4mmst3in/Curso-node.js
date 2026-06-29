// setTimeout()
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(num1, num2) {
  console.log(num1 + num2)
}

setTimeout(mostrarTema, 2000, 'Node.js')


mostrarTema('Javascript') // Esto se imprime antes por la asincronia de Javascript


setTimeout(sumar, 2000, 10, 20)

setTimeout(() => {
  sumar(10,200)
},2000)