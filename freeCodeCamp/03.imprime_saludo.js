const saludo = require('./3.saludos.js')   // De esta forma importamos TODO el modulo y las funciones que hay
const {reverenciar} = require('./3.saludos.js') // Con la destructuracion solo el modulo entre llaves

console.log(saludo.saludar('Javier'))
// console.log(saludo.reverenciar('Javier'))
console.log(reverenciar('Javier'))