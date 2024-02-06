const express = require('express')
const router = express.Router()
const personalRouter = require('./personalApi')

router.use('/personal', personalRouter)
module.exports = router