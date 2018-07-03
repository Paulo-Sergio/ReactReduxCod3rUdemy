const mongoose = require('mongoose')

// atribuindo a API de Promise do node (evitar warning)
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

// Tradução da mensagem
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor informado é menor que o limite de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor informado é maior que o limite de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."