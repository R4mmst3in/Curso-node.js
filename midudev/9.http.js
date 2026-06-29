const http = require('node:http')
const PORT = 0 // Usa el primer puerto que se encuentre libre

const server = http.createServer((req, res) => {
  console.log ('Request received')
  const html = '<h1>Hola mundo</h1>'
  res.end(html)
})

server.listen(PORT, () => {
  console.log (`Server listening on port ${server.address().port}`)
})