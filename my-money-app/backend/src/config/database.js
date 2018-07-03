const mongoose = require('mongoose')

// atribuindo a API de Promise do node (evitar warning)
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')