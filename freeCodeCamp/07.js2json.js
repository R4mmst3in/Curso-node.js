// Como convertir un objeto JS a JSON y viceversa
//JSON.stringify()
//JSON.parse()

let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45353,
  "numLikes": 2343,
  "temas": ["Javascript","Node.js"],
  "esPublico": true
}

// Objeto a cadena de caracteres
let infoCursoString = JSON.stringify(infoCurso)

console.log (infoCursoString)
console.log (typeof infoCursoString)


// Ahora el proceso contrario. De string a objeto JSON

let infoPersonaString = JSON.parse('{"Nombre": "Javier","Apellidos": "Martin Peña", "Edad": 23}')

console.log(infoPersonaString)
console.log(typeof infoPersonaString)

let infoCursoObj = JSON.parse(infoCursoString)
console.log(infoCursoObj)
console.log(typeof infoCursoObj)


