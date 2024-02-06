const mongoose = require('mongoose')
const { Schema } = mongoose;

const mobileSchema = new Schema({
    nombre : {
        type: String,
        required : true
    },
    itinerario:{
        type:String,
        required:true
    },
    tipo : {
        type: String,
        required : true
    },
    personal : {
        type: String,
        required : true
    },
    transporte : {
        type: String,
        required : true
    },
    servicio : {
        type: String,
        required : true
    },
}, {strict: false, timestamps: true})

const MobileDataModel = mongoose.model('Historial', mobileSchema)
module.exports = MobileDataModel