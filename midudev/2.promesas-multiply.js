const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const multiply = (num1, num2) => {
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return Promise.reject('Tienen que ser numeros')
  }

  return new Promise ((resolve, reject) => {
  setTimeout(()=> {
    resolve ( {
      num1     : num1,
      num2     : num2,
      resultado: num1 * num2
    }
  )}, random(400, 1500))
})
}

multiply(10,34)
.then ((response) => {
  console.log (`${response.num1} * ${response.num2} = ${response.resultado}`)
})
.catch (error => {
  console.log (error)
})

multiply(10,34)
.then ((response) => {
  console.log (`${response.num1} * ${response.num2} = ${response.resultado}`)
})
.catch (error => {
  console.log (error)
})