const router = require('express').Router()
const {
  countryAll,
  countryCreate,
  countryDelete,
  countryDetail,
  countryUpdate,
} = require('../controllers/country.controller')

// CREATE
router.post('/', countryCreate)

// READ
router.get('/', countryAll)
router.get('/:id', countryDetail)

// UPDATE
router.patch('/:id', countryUpdate)

// DELETE
router.delete('/:id', countryDelete)

module.exports = router
