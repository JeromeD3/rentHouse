const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: { type: String },
  age: { type: Number },
  sex: { type: String },
})

module.exports = mongoose.model('Test', schema)
