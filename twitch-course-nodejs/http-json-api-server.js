const http = require('node:http')

port = process.argv[2]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (req.method === 'GET') {
    
  }


})

server.listen(port, () => {
  console.log(`Server listen on ${port}`)
})