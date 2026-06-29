const saludar = (nombre) => {
  return `Hola ${nombre} te saludamos desde Nodejs`
}

const reverenciar = (nombre) => {
  return `Gentilmente le saludamos ${nombre}`
}

/* module.exports.saludar = saludar
module.exports.reverenciar = reverenciar */

module.exports = {
  saludar: saludar,
  reverenciar : reverenciar
}