const http = require('node:http')
urls = process.argv.slice(2)

const httpRequest = (url) => {
  return new Promise ((resolve, reject) => {
    http.get(url, (response)=> {
      let result = ''
      response.setEncoding('utf-8')
      response.on('data', (chunk) => {
        result += chunk
      })
      
      response.on('end', () => {
        resolve(result)
      })

      response.on('error', (err) => {
        reject(new Error(`La url ${url} no devuelve datos`))
      })

    })
  })
}

Promise
.allSettled(urls.map((url) => httpRequest(url)))
.then(results => results.forEach((result)=>console.log(result.value)))