import mongoose from 'mongoose'
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
  make: String,
  model: String,
  color: String
})

export default mongoose.model('Vehicle', VehicleSchema)
