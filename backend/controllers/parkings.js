const parkingsRouter = require('express').Router()
const Parking = require('../models/parking')

parkingsRouter.get('/', async (request, response) => {
  const parkings = await Parking.find({})
  response.json(parkings)
})

parkingsRouter.get('/nearby', async (request, response) => {
  try {
    const { lat, lng } = request.query

    if (!lat || !lng) {
      return response.status(400).json({ error: 'Faltan parámetros de latitud o longitud' })
    }

    const latitude = parseFloat(lat)
    const longitude = parseFloat(lng)

    if (isNaN(latitude) || isNaN(longitude)) {
      return response.status(400).json({ error: 'Coordenadas inválidas' })
    }

    // Realizamos la búsqueda geoespacial utilizando $near
    const parkings = await Parking.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 1000  // Distancia en metros (2km)
        }
      }
    })

    response.json(parkings)
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Ocurrió un error al buscar los parkings más cercanos' })
  }
})

module.exports = parkingsRouter

