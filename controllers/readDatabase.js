const User = require('../models/registerSchema')
const File = require('../models/storageSchema')

const numberOfUsers = async()=>{
  var number_of_users;  

 await User.find().exec().then((data)=>{
  if(data){
     number_of_users = data.length
      //console.log(number_of_users)
  
      
    }
   else {
     numberOfUsers = 'Error';
   }
 })
 return number_of_users;
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


module.exports = {numberOfUsers,findFile}