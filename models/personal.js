const mongoose = require('mongoose')
const { Schema } = mongoose;

const personalSchema = new Schema({
    nombre : {
        type: String,
        required : true
    },
    apellido : {
        type: String,
        required : true
    },
    ficha : {
        type: String,
        required : true
    },
    origen : {
        type: String,
        required : true
    },
    destino : {
        type: String,
        required : true
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
    subidaBajada : {
        type: String,
        required : true
    },
}, {strict: false})

const PersonalModel = mongoose.model('Personal', personalSchema)
module.exports = PersonalModel