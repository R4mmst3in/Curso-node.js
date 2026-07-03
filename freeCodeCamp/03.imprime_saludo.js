const saludo = require('./03.saludos.js')   // De esta forma importamos TODO el modulo y las funciones que hay
const {reverenciar} = require('./03.saludos.js') // Con la destructuracion solo el modulo entre llaves

const readline = require('readline')
const persona = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

persona.question('Ingrese su nombre: ', (nombre) => {
  console.log(saludo.saludar(nombre))
  console.log(reverenciar(nombre))
  
  persona.close()
})  

