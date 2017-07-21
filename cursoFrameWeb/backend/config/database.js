const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.require = "O Valor '{PATH}' é Obrigatório !!!"
mongoose.Error.messages.Number.min = "O '{VALUE}' é Menor que o Limite Mínimo Permitido de '{MIN}' !!!"
mongoose.Error.messages.Number.max = "O '{VALUE}' é Maior que o Limite Máximo Permitido de '{MAX}' !!!"
mongoose.Error.messages.String.enum = "O '{VALUE}' Não é Válido Para o Atributo '{PATH}' !!!"