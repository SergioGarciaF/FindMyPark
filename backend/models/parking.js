const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number
})

parkingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Parking', parkingSchema)