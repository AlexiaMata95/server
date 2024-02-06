const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { personalController } = require('../controllers')
const baseModel = require('../models/personal')
const mobileModel = require('../models/mobileData')

const { getDatabase } = personalController

router.get('/', async ( req, res ) => {
    console.log('get');
    const personal = await getDatabase()
    res.send(personal)
})

router.get('/:id', async ( req, res ) => {
    const collectionName = req.params.id;
    try {
        const collection = mongoose.connection.db.collection(collectionName);
        const documents = await collection.find({}).toArray();
        res.json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
})

router.post('/QRData', async (req,res) => {
    try {
        const newQRData = new mobileModel({
            nombre: req.body.ficha + ' ' + req.body.nombre ,
            itinerario : req.body.itinerario,
            tipo : req.body.tipo,
            personal : req.body.personal,
            transporte :req.body.transporte,
            servicio : req.body.servicio
        })
        await newQRData.save()
        res.status(201).send({message:"Datos del QR guardados con exito"})
    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router