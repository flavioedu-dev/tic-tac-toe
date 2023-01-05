const express = require('express')
const path = require('path')
const router = express.Router()

const playerController = require('../controllers/playerController')

router.use('/', express.static(path.join(__dirname, '../../jogo-da-velha')))

router.post('/', express.urlencoded({ extended: true }), playerController.addPlayer)

module.exports = router