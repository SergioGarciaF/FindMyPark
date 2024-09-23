const mongoose = require('mongoose')
const Parking = require('./models/parking')
const config = require('./utils/config')

// Conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI)
    console.log('Conectado a MongoDB')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
    process.exit(1)
  }
}

// Migración de los parkings
const migrateParkings = async () => {
  try {
    const parkings = await Parking.find({})

    for (const parking of parkings) {
      // Verificar si lat y lng son números válidos
      if (typeof parking.lat === 'number' && typeof parking.lng === 'number') {
        // Verificar que no sean null o undefined
        if (parking.lat !== null && parking.lng !== null) {
          parking.location = {
            type: 'Point',
            coordinates: [parking.lng, parking.lat], // lng primero, luego lat
          }
          await parking.save() // Guarda el parking con el nuevo formato
          console.log(`Parking actualizado: ${parking.name}`)
        } else {
          console.log(`Saltando parking con lat/lng inválidos: ${parking.name}, lat: ${parking.lat}, lng: ${parking.lng}`)
        }
      } else {
        console.log(`Saltando parking con tipos de datos incorrectos: ${parking.name}, lat: ${parking.lat}, lng: ${parking.lng}`)
      }
    }

    console.log('Migración completada')
  } catch (error) {
    console.error('Error durante la migración:', error)
  } finally {
    mongoose.connection.close()
  }
}

// Ejecutar la migración después de conectar
const runMigration = async () => {
  await connectDB()
  await migrateParkings()
}

runMigration()
