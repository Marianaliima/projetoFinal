const mongoose = require('mongoose')

const localSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },

    site: {
        type: String,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

     bairro: {
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


module.exports = mongoose.model('local', localSchema)