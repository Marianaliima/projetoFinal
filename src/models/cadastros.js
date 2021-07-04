const mongoose = require('mongoose')


const cadastroSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
    
})


module.exports = mongoose.model('cadastro', cadastroSchema)