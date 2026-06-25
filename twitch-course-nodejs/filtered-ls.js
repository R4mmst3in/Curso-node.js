const fs   = require('node:fs')
const path = require('node:path')

directory = process.argv[2]
extension = '.' + process.argv[3]

fs.readdir(directory,'utf-8',(err, files) => {
  if (err)
    return console.error(err)
  files.map (file => {
    if (path.extname(file) === extension)
      console.log(file)
  })
})
