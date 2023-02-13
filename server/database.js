const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI)
    .then(db => console.log('conected'))
    .catch(err => console.log(err))

module.exports = mongoose