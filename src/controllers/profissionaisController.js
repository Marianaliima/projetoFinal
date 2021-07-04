const mongoose = require('mongoose')
const Profissional = require('../models/profissionais')

const criaProfissionais = async (req,res) =>{
     const profissional = new Profissional({
         _id: new mongoose.Types.ObjectId(),
         nome: req.body.nome,
         especialidade: req.body.especialidade,
         credencial: req.body.credencial,
         contato: req.body.contato,
         descricao: req.body.descricao,
         email: req.body.email,
         endereco: req.body.endereco,
         estado: req.body.estado,
         cidade: req.body.cidade,
         criadoEm: req.body.criadoEm



     })

     const ProfissionalJaExiste = await Profissional.findOne({nome: req.body.nome})
     if(ProfissionalJaExiste) {
         return res.status(409).json({error: "Profissional já cadastrado!"})
     }

     try{
         const novoProfissional = await profissional.save()
         return res.status(201).json(novoProfissional)

     }catch (err){
         return res.status(400).json({message: err.message})

     }
}

const mostraProfissionais = async (req, res) =>{
    try {
        const profissionais = await Profissional.find()
    return res.status(200).json(profissionais)
}catch(err){
    res.status(500).json({message: err.message})

}
}

const atualizaProfissionais = async (req, res)=>{
    try {
        const profissional = await Profissional.findById(req.params.id)
        if (profissional == null) {
            return res.status(404).json({ message: 'Profissional não encontrado!'})
        }

        if (req.body.nome != null) {
            profissional.nome = req.body.nome
        }

        if (req.body.especialidade != null) {
            profissional.especialidade = req.body.especialidade
        }

        if (req.body.endereco= null) {
            profissional.endereco = req.body.endereco
        }

        

        const profissionalAtualizado = await profissional.save()
        res.json(profissionalAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}


const deletaProfissionais = async (req, res)=>{
    try {
        const profissional = await Profissional.findById(req.params.id)
        if (profissional == null) {
        return res.status(404).json({ message: 'Profissional não encontrado'})
        }
    
        await profissional.remove()
        res.json({ message: 'Profissional deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

}



module.exports = {
    criaProfissionais,
    mostraProfissionais,
    deletaProfissionais,
    atualizaProfissionais
}