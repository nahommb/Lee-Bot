const mongoose = require('mongoose')
const User = require('../models/registerSchema')

const register = (chatId)=>{
  const newuser = User({
    chatId:chatId
  })
User.find({chatId}).exec().then((data)=>{
    if(data){
        console.log('already registerd')
    }
    else{
     newuser.save()   
    }
})
}

module.exports = register