const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', async (req, res, next) => {
  const { data } = await axios.get('https://api.kanye.rest/')
  req.app.locals.quote = data.quote
  res.render('index')
})

module.exports = router
