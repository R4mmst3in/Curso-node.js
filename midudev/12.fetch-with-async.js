const apiLink1 = 'https://jsonplaceholder.typicode.com/users'
const apiLink2 =

console.log(`Obteniendo datos de ${apiLink}`)

const apiFetch = async (link) => {
  const respuesta = await fetch(link)
  const data = await respuesta.json()
  console.log(data)
}

apiFetch(apiLink)