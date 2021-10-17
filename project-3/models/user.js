const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name must be provided'],
  },
  password: {
    type: String,
    required: [true, 'User Password must be provided'],
  }

})

module.exports = mongoose.model('Product', userSchema)
