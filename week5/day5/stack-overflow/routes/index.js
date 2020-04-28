const router = require('express').Router()
const { feedGet } = require('../controllers/index.controller')

router.get('/', feedGet)

module.exports = router
