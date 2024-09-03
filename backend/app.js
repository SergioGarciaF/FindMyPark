const path = require('path')
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const parkingsRouter = require('./controllers/parkings')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))  // Servir archivos estáticos desde 'dist'
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/parkings', parkingsRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
