const mongoose = require('mongoose')

const ReportsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    animal:{
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('reports', ReportsSchema)