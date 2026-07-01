const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject ('OK')
  }, 5000)
})
console.log('Fuera de la promesa')

promise
.then((response) =>{
  console.log(response)
})
. catch (err => {
  if (err) {
    console.error ('Error en la promesa, pero la aplicacion sigue')
  }
})
