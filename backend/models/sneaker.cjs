const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SneakersSchema = new Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  imageUrl: {
    type: String
  }
})

const Sneaker = mongoose.model('sneakers', SneakersSchema)

module.exports = Sneaker