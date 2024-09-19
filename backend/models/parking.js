const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,  // El tipo de geometría será 'Point'
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // Un array de números: [lng, lat]
      required: true
    }
  }
})

parkingSchema.index({ location: '2dsphere' }) // Crear el índice geoespacial

parkingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Parking', parkingSchema)
