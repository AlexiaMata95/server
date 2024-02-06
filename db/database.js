const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster1.${process.env.ID}.mongodb.net/Personal?retryWrites=true&w=majority`

mongoose.connect(url)
.then(() =>{
    console.log('---------------------------------')
    console.log('Base de datos conectada con éxito');
    console.log('---------------------------------');
})
.catch((error) =>{
    console.log(error);
})

module.exports = mongoose