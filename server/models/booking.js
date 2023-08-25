const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true },

  checkIn: { type: data, required: true },
  checkOut: { type: data, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  price: { type: Number, required: true },

})

module.exports = mongoose.model('Booking', schema)
