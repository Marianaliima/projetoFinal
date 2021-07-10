const express = require('express')
const cors = require('cors')
const cadastro = require('./src/routes/cadastros.routes')
const local = require('./src/routes/locais.routes')
const profissional = require('./src/routes/profissionais.routes')
const db = require('./src/data/dbConfig.js')
// conectar db 
db.connect()


const app = express()
app.use(express.json())
app.use(cors())




// usar as rotas


app.use('/cadastro', cadastro)
app.use('/locais', local)
app.use('/profissionais', profissional)

module.exports = app