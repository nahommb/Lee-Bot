const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
  chatId:String
})

const User = mongoose.model('users',registerSchema)

module.exports = User;