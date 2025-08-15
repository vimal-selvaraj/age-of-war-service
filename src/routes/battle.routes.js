const express = require('express')
const router = express.Router()
const battleController = require('../controllers/battle.controller')

router.post("/commence-battle",battleController.commenceBattle)

module.exports=router;