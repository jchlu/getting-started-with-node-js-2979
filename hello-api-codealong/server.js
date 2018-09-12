import Vehicle from './app/models/vehicle'
import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

// Configure app for bodyParser()
// lets us grab the POST body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// set port for server to listen on
const port = process.env.PORT || 3000

// Connect to DB

mongoose.connect('mongodb://127.0.0.1:27017/codealong', {useNewUrlParser: true})

// Setup API routes
const router = express.Router()

// prefix routes with api prefix
app.use('/api', router)

/**
 * MIDDLEWARE
 * Very useful for validation. we can log things from here or stop
 * the request from continuing in the event that the reuest os not safe.
 */
// Middleware for all requests:
router.use((request, response, next) => {
  console.log('FYI... There\'s currently some processing going down...')
  next()
})
// Test route
router.get('/', (request, response) => response.json({message: 'Welcome to our API'}))

// Vehicle route
router.route('/vehicles')
  .post((request, response) => {
    const vehicle = new Vehicle()
    vehicle.make = request.body.make
    vehicle.model = request.body.model
    vehicle.color = request.body.color

    vehicle.save((error) => {
      error && response.send(error)
      response.json({ message: 'Vehicle was successfully manufactured!' })
    })
  })
  .get((request, response) => {
    Vehicle.find((error, vehicles) => {
      error && response.send(error)
      response.json(vehicles)
    })
  })

router.route('/vehicle/:vehicle_id')
  .get((request, response) => {
    Vehicle.findById(request.params.vehicle_id, (error, vehicle) => {
      error && response.send(error)
      response.json(vehicle)
    })
  })

router.route('/vehicle/make/:make')
  .get((request, response) => {
    Vehicle.find({ make: request.params.make }, (error, vehicle) => {
      error && response.send(error)
      response.json(vehicle)
    })
  })

router.route('/vehicle/color/:color')
  .get((request, response) => {
    Vehicle.find({ color: request.params.color }, (error, vehicle) => {
      error && response.send(error)
      response.json(vehicle)
    })
  })

// Fire up the server

app.listen(port) && console.log('Server listening on ', port)
