const mongoose = require('mongoose')
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
const findFile = async (filename)=>{
   var file_path;
    await File.findOne({fileName:filename}).exec().then((data)=>{
        if(data){
            file_path = data.file
        }
    })
    return file_path;
}


module.exports = {isAvailable,findFile}