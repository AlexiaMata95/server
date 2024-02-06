const express = require('express');
const app = express()
const mongoose = require('mongoose')

require('dotenv').config();
require('./db/database')
const router = require('./api')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(router)

app.get('/' ,  (req, res) =>{
    res.send({
        message : 'Servidor corriendo'
    })
})
module.exports=app;