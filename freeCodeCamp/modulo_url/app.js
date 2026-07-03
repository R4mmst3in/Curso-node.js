const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(miURL.hostname)

console.log(miURL.pathname)

console.log(miURL.searchParams)

console.log(miURL.searchParams.get('ordenar'))
console.log(miURL.searchParams.get('nivel'))

// console.log(miURL.searchParams.has('ordenar'))
// console.log(miURL.searchParams.has('nivel'))

if (miURL.searchParams.has('ordenar'))
  console.log('Tenemos busqueda ordenar')

if (miURL.searchParams.has('nivel'))
  console.log('Tenemos busqueda nivel')

console.log(miURL.protoco)