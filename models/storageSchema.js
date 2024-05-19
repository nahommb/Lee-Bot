const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    fileName:String,  
    file:String,
    
})

const File = mongoose.model('files',fileSchema)

module.exports = File;