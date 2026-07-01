// Como manejar archivos json desde node.js
const curso = require('./07.curso.json')
const fs = require('node:fs')

console.log(curso)
console.log(typeof curso)

// Podemos acceder a su valores particulares
console.log(curso.titulo)
console.log(typeof curso.titulo)