/*
Solicitudes HTTP desde el cliente al servidor
Request = Solicitud   - Metodos HTTTP (GET, POST, PUT, DELETE, Otros)
                      - Camino (Path)
                      - Cabeceras (Headers)
                      - Cuerpo (Body)
  
  GET: Solicitud de datos o recursos del servidor. HTML, JSON, XML, etc.
  POST: Enviar datos al servidor. Agregar datos al servidor
  PUT: Actualizar datos en el servidor. Modificar datos en el servidor
  DELETE: Eliminar datos del servidor. Borrar datos del servidor

Respuestas HTTP desde el servidor al cliente
Response = Respuesta  - Codigo de estado (Status Code)
                      - Texto de estado (Status Text)
                      - Version HTTP (HTTP Version)
                      - Cabeceras (Headers)
                      - Cuerpo (Body)


Codigos de estado HTTP
  Respuestas informativas (1xx)           Respuestas satisfactorias (2xx)
  Respuestas de redireccionamiento (3xx)  Respuestas de error del cliente (4xx)
  Respuestas de error del servidor (5xx)

  200: OK                             201: Creado
  400: Solicitud incorrecta           401: No autorizado
  404: No encontrado                  500: Error interno del servidor
  504: Error de puerta de enlace

*/

const http = require('http')
const PUERTO = 3000

const server = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hola, mundo')
})

server.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`)
})