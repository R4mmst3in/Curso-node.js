const net = require('node:net')

const getFecha = () => {
  date = new Date();

  anno = String(date.getFullYear())
  mes  = String(date.getMonth() + 1).padStart(2,'0')     // starts at 0
  dia  = String(date.getDate()).padStart(2,'0')      // returns the day of month
  hour = String(date.getHours()).padStart(2,'0')
  min  = String(date.getMinutes()).padStart(2,'0')

  fecha = anno + '-' + mes + '-' + dia + ' ' + hour + ':' + min

  return (fecha)
}

console.log(getFecha())

const server = net.createServer ((socket)=>{
  fecha = getFecha()
  socket.end(getFecha() + '\n')
})


server.listen(Number(process.argv[2]))