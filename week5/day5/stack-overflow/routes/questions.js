const router = require('express').Router()
const {
  createPost,
  detailGet,
  createAnswerPost,
  deleteAnswerPost,
  updateAnswerPost,
} = require('../controllers/questions.controller')

router.post('/create', createPost)

router.post('/answer/create/:id', createAnswerPost)
router.post('/answer/update/:qid/:aid', updateAnswerPost)
router.get('/answer/delete/:id', deleteAnswerPost)

router.get('/:id', detailGet)

module.exports = router
