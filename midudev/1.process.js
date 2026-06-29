console.log(process.env.ps1)
// El primer argumento es el 2, el segundo y asi sucesivamente

// node fichero.js Javier 2300
//  0       1         2     3

console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])

// Bucle que recorre una lista de argumentos
for (let i = 2;i< process.argv.length; i++) {
  console.log(process.argv[i])
}

// Con foreach
console.log('Con forEach')
let indice = 2
process.argv.forEach((arg, indice) => {
  console.log(arg)
  indice++;
})