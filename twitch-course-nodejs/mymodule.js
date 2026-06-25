const fs  = require('node:fs')
const path = require('node:path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, 'utf-8', (err, data) => {
    if (err) 
      return callback(err)

    listData = []
    
    data.forEach(file => {
      // console.log (`${path.extname(file)} -- ${extension}`)
      if (path.extname(file).replace(".","") === ext)
        listData.push(file)
    })
    callback(err, listData)
  })
}
