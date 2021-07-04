const express = require('express')
const cadastro = require('./src/routes/cadastros.routes')
const local = require('./src/routes/locais.routes')
const profissional = require('./src/routes/profissionais.routes')
const db = require('./src/data/database.js')


const app = express()
app.use(express.json())


// conectar db 
db.connect()

// usar as rotas


app.use('/cadastro', cadastro)
app.use('/locais', local)
app.use('/profissionais', profissional)


app.listen(9090, ()=> console.log('Servidor rodando na porta 9090'))
