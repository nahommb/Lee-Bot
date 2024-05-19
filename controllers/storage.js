const mongoose = require('mongoose')
const File = require('../models/storageSchema')

const storage =(fileName,filePath)=>{
const newfile = File({
    fileName:fileName,
    file:filePath
})
newfile.save()
}

module.exports = storage