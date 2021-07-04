const express = require('express')
const router = express.Router()
const controller = require('../controllers/profissionaisController')

router.get('/', controller.mostraProfissionais)
router.post('/', controller.criaProfissionais)
router.delete('/:id', controller.deletaProfissionais)
router.patch('/:id', controller.atualizaProfissionais)



module.exports = router