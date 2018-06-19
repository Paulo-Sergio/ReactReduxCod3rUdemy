const mongoose = require('mongoose')

/* Utilizando a api de Promise do node (api Promise do mongoose esta depreciada) */
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')