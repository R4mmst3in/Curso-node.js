const http = require('http')
const PUERTO = 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')

  console.log('===> Request recibida')
  console.log(res.statusCode)

  console.log(res.getHeaders())

  res.end('Hola mundo')
  
})

server.listen(PUERTO, () => {
  console.log (`Servidor escuchando en http://localhost:${PUERTO}...`)
})