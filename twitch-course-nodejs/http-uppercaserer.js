const http = require('http')
const map = require('through2-map')


// const map = require('through2-map')
//      inStream.pipe(map(function (chunk) {
//        return chunk.toString().split('').reverse().join('')
//      })).pipe(outStream)

port = process.argv[2]

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/plain'})

  if (req.method === 'POST') {
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase()
    }
    )).pipe(res)
  }

}) 


server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})