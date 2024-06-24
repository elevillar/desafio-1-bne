const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  try {
    const data = leer()
    const citas = JSON.parse(data)
    citas.push({
      nombre: nombre,
      edad: edad,
      tipo: tipo,
      color: color,
      enfermedad: enfermedad,
    })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    return 'Paciente ingresado con éxito'
  } catch (error) {
    console.log('No fué posible ingresar la información')
  }
}

// Función para leer las citas existentes
const leer = () => {
  try {
    const data = fs.readFileSync('citas.json', 'utf8')
    return data.toString()
  } catch (error) {
    console.log('No fué posible leer el archivo')
  }
}

module.exports = { registrar, leer };
