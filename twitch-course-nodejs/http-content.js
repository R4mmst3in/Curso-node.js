
const http = require('node:http')

http.get(process.argv[2], function(response) {
  let result = ''
  response.setEncoding('utf-8')
  response.on('data', (chunk)=>{
    result += chunk
  })

  response.on('end', ()=> {
    console.log(result.length)
    console.log(result)
  })

  response.on('error', (error) => {
    console.log(error)
  })
})