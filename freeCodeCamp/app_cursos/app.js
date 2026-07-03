const http = require('http')
const infoCursos = require('./cursos').infoCursos

const {programacion, matematicas} = infoCursos

/* const muestraCursos = () => {
  console.log('Listado de cursos de programación')
  programacion.map((curso) => {
    console.log(`${curso.id} - ${curso.nombre} - ${curso.vistas} vistas - Nivel: ${curso.nivel}`)
  })

  console.log('Listado de cursos de matemáticas')
  matematicas.map((curso) => {
    console.log(`${curso.id} - ${curso.nombre} - ${curso.titulo} - ${curso.vistas} vistas - Nivel: ${curso.nivel}`)
  })
} */

const handlerGet = (req, res) => {
  const path = req.url

  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Bienvenido al servidor')
      break
    case '/cursos':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(infoCursos))
      break
    case '/cursos/programacion':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(programacion))
      break
    case '/cursos/matematicas':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(matematicas))
      break
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.statusCode = 404
      res.end('Recurso no disponible')
      break
  }    
}

const handlerPost = (req, res) => {
  const path = req.url

  if (path === '/cursos/programacion') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.statusCode = 200
    res.end('Curso de programación creado')
  }



}

const server = http.createServer((req, res) => {
  const {method} = req;


  switch(method) {
    case 'GET':
      return handlerGet(req, res)
    case 'POST':
      return handlerPost(req, res)
    default:
      res.statusCode = 501
      res.end(`El método ${method} no está implementado en el servidor`)
      break
  }
})

server.listen(3000, ()=> {
  console.log('Servidor escuchando en el puerto 3000')
})


