const User = require('../models/registerSchema')

const register = async (chatId)=>{
  const newuser = User({
    chatId:chatId
  })
  var isAlreadyRegisterd = false
await User.findOne({chatId}).exec().then((data)=>{
    if(data){
        console.log('already registerd')
        console.log(data)
        isAlreadyRegisterd = true
    }
    else{
     newuser.save()   
     isAlreadyRegisterd = false
    }
})
return isAlreadyRegisterd
}

module.exports = register