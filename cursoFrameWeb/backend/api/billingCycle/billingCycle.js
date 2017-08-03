const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O campo nome do credito é Obrigatório"]
    },
    value: {
        type: Number,
        min: 0,
        required: [true, "O campo valor do credito é Obrigatório"]
    }
})

const debtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O campo nome do débito é Obrigatório"]
    },
    value: {
        type: Number,
        min: 0,
        required: [true, "O campo valor do débito é Obrigatório"]
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O campo nome do ciclo é Obrigatório"]
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: [true, "O campo mês do ciclo é Obrigatório"]
    },
    year: {
        type: Number,
        min: 1970,
        max: 2100,
        required: [true, "O campo é ano do ciclo é Obrigatório"]
    },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)