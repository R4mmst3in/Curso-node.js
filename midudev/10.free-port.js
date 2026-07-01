const { http } = require('node:http')
const { findAvalaiblePort } = require('9.find-port.js')

const server = http.createServer((req, res)=>{
  console.log('Request received')
  res.end('Hola mundo')
})

findAvalaiblePort(3000)
.then(port => {
  server.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}`)
  })
})