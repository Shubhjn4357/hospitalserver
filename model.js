const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    image: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: Number
    },
    cartitem: {
        required: true,
        type: Number
    },
    price:{
        required: true,
        type: Number
    },
    link:{
      required:true,
      type:String
    }
})

module.exports = mongoose.model('datas', dataSchema)