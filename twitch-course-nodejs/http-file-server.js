const http = require ('http')
const fs = require ('fs')

port = process.argv[2]
filename = process.argv[3]


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(filename).pipe(res)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})