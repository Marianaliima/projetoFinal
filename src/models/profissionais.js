const mongoose = require('mongoose')

const profissionalSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },

    especialidade: {
        type: String,
        required: true
    },

    credencial: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },

    contato: {
        type: String,
        required: true,
    },

     descricao: {
        type: String,
        required: true,
    },

    endereco: {
        type: String,
        required: true,
    },


    estado: {
        type: String,
        required: true,
    },

    cidade: {
        type: String,
        required: true,
    },

    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
    
})


module.exports = mongoose.model('profissional', profissionalSchema)