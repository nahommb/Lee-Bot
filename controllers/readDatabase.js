const mongoose = require('mongoose')
const User = require('../models/registerSchema')

const isAvailable = (user)=>{
    userExists = false
 User.findOne({user}).exec().then((data)=>{
    if(data){
      userExists = true
    }

 })
 return userExists
}

module.exports = isAvailable