const personalModel = require('../models/personal');

const getDatabase = async () => {
    console.log(personalModel);
    const personal = await personalModel.find({})
    return personal
}


module.exports = { getDatabase }