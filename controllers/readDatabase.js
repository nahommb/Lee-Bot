const User = require('../models/registerSchema')
const File = require('../models/storageSchema')

const isAvailable = (user)=>{
  var  userExists = false
 User.findOne({user}).exec().then((data)=>{
    if(data){
      userExists = true
    }

 })
 return userExists
}
const findFile = async(callback)=>{
  var filename = callback;

   var file_path;
    await File.find({fileName:filename}).exec().then((data)=>{
        if(data){
      
            file_path = data
        }
    })
    return file_path;
}


module.exports = {isAvailable,findFile}