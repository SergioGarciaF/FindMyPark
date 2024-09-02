const parkingsRouter = require('express').Router()
const Parking = require('../models/parking')

parkingsRouter.get('/', async (request, response) => {
  const parkings = await Parking.find({})
  response.json(parkings)
})

module.exports = parkingsRouter