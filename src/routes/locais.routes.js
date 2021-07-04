const express = require('express')
const router = express.Router()
const controller = require('../controllers/locaisController')

router.get('/', controller.mostraLocais)
router.get('/estados', controller.mostraEstados)
router.post('/', controller.criaLocais)
router.delete('/:id', controller.deletaLocais)
router.patch('/:id', controller.atualizaLocais)



module.exports = router