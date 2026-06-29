const datos = [{
  id: 1,
  title: 'Iron Man',
  year: 2008
},
{
  id:2,
  title: 'Superman',
  year: 2003
},
{
  id:3,
  title: 'Avengers Endgame',
  year: 2019
}]

const agenda = (datos) => {
  return new Promise ((resolve, reject) => {
    setTimeout (()=> {
      resolve (datos)
    }, 1000)
  })
}

agenda(datos)
.then ((response)=> {
  response.forEach(element => {
    console.log(`${element.id.toString().padEnd(4)} ${element.title.padEnd(20)} ${element.year.toString().padEnd(6)}`)
  });
})