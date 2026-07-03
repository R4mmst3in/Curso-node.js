/*
licitudes HTTP desde el cliente al servidor
Request = Solicitud   - Metodos HTTTP (GET, POST, PUT, DELETE, Otros)
                      - Camino (Path)
                      - Cabeceras (Headers)
                      - Cuerpo (Body)
*/

const http = require('http')
const PUERTO = 3000

const server = http.createServer((req, res) => {
  console.log('===> Request recibida')
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)

  res.end('Hola, mundo')

})

server.listen(PUERTO, () => {
  console.log (`Servidor escuchando en http://localhost:${PUERTO}...`)
})