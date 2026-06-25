// const datos = [{
//   id: 1,
//   title: 'Iron Man',
//   year: 2008
// },
// {
//   id:2,
//   title: 'Superman',
//   year: 2003
// },
// {
//   id:3,
//   title: 'Avengers Endgame',
//   year: 2019
// }]
console.log ('Antes de Promise')

const getDatos = () => {
  return new Promise ((resolve, reject) => {
    if (datos.length == 0) {
      reject (new Error ('No existen datos'))
    }
    setTimeout(()=> {
      resolve(datos)
    }, 1000)
  })
}

async function fetchingDatos() {
  try {
    const datosFetched = await getDatos()
    console.log(datosFetched)
  } catch (err){
    console.error(err.message)
  }
}

fetchingDatos()