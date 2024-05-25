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
const findFile = async(callback)=>{
  var filename = callback;
  // switch(callback){
  //   case 'C++':{
  //       filename = await callback
  //       console.log('success')
  //   }
  //   break;
  // }
   var file_path;
    await File.find({fileName:filename}).exec().then((data)=>{
        if(data){
         // console.log(data)
            file_path = data
        }
    })
    return file_path;
}


module.exports = {isAvailable,findFile}