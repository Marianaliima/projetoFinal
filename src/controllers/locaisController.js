const mongoose = require('mongoose')
const Local = require('../models/locais')

const criaLocais = async (req,res) =>{
     const local = new Local({
         _id: new mongoose.Types.ObjectId(),
         nome: req.body.nome,
         site: req.body.site,
         email: req.body.email,
         telefone: req.body.telefone,
         endereco: req.body.endereco,
         bairro: req.body.bairro,
         cidade: req.body.cidade,
         estado: req.body.estado,
         criadoEm: req.body.criadoEm



     })

     const localJaExiste = await Local.findOne({nome: req.body.nome})
     if(localJaExiste) {
         return res.status(409).json({error: "Local já cadastrado!"})
     }

     try{
         const novoLocal = await local.save()
         return res.status(201).json(novoLocal)

     }catch (err){
         return res.status(400).json({message: err.message})

     }
}

const mostraLocais = async (req, res) =>{
    try {
        const locais = await Local.find()
    return res.status(200).json(locais)
}catch(err){
    res.status(500).json({message: err.message})

}
}

const mostraEstados = async(req, res) =>{
    try {
        const { estado } = req.query

        const Estado = await Local.find({estado: estado})
        

        if (Estado == undefined || estado == " ") {
            return res.status(404).json({
                message: "Estado inválido, tente novamente"
            })
        }
        res.status(200).json(Estado)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const atualizaLocais = async (req, res)=>{
    try {
        const local = await Local.findById(req.params.id)
        if (local == null) {
            return res.status(404).json({ message: 'local não encontrado!'})
        }

        if (req.body.nome != null) {
            local.nome = req.body.nome
        }

        if (req.body.site != null) {
            local.site = req.body.site
        }

        if (req.body.endereco= null) {
            local.endereco = req.body.endereco
        }

        

        const localAtualizado = await local.save()
        res.json(localAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}


const deletaLocais = async (req, res)=>{
    try {
        const local = await Local.findById(req.params.id)
        if (local == null) {
        return res.status(404).json({ message: 'Local não encontrado'})
        }
    
        await local.remove()
        res.json({ message: 'Local deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

}



module.exports = {
    criaLocais,
    mostraLocais,
    mostraEstados,
    deletaLocais,
    atualizaLocais
}