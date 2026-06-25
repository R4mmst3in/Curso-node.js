const apiLink = 'https://jsonplaceholder.typicode.com/users'

console.log(`Obteniendo datos de ${apiLink}`)

fetch(apiLink)
.then(res =>
  res.json()
)
.then(data =>
  console.log(data)
)