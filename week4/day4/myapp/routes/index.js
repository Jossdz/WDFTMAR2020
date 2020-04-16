const router = require('express').Router()
const {
  indexGet,
  detailGet,
  createGet,
  createPost,
  editGet,
  editPost,
  deleteGet,
} = require('../controllers/index.controller')

// CREATE
router.get('/create', createGet)
router.post('/create', createPost)

// READ
router.get('/', indexGet)
router.get('/country/:id', detailGet)

// UPDATE
router.get('/edit/:id', editGet)
router.post('/edit/:id', editPost)

// DELETE
router.get('/delete/:id', deleteGet)

module.exports = router
