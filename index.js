const { registrar, leer } = require('./operaciones')
console.log(process.argv.slice(2))

const datos = process.argv.slice(2)
const operacion = datos[0]
const nombre = datos[1]
const edad = datos[2]
const tipo = datos[3]
const color = datos[4]
const enfermedad = datos[5]

if (operacion !== undefined) {
  if (operacion.trim().toLowerCase() === 'registrar') {
    let resultado = registrar(nombre, edad, tipo, color, enfermedad)
    console.log(resultado)
  } else if (operacion.trim().toLowerCase() === 'leer') {
    let resultado = leer()
    console.log(resultado)
  } else {
    console.log('Ingresa una opción válida (LEER o REGISTRAR)')
  }
} else {
    console.log('Ingresa una opción')
}
