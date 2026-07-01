// Promesas

const promesaCumplida = false

const miPromesa = new Promise((resolve,reject) => {
  setTimeout(()=>{
    if (promesaCumplida) {
      resolve('Promesa cumplida')
    } else {
      reject ('Promesa rechazada...')
    }
  },3000)
})

const handlerResolve = ((valor)=> {
  console.log(valor)
})

const handlerReject = ((err)=> {
  console.error(err)
})

miPromesa
.then(handlerResolve, handlerReject)