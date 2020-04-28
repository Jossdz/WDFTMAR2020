const Question = require('../models/Question')

exports.feedGet = async (req, res) => {
  const { tag } = req.query
  let query = {}
  let filter = false
  if (tag) {
    filter = true
    query = { tags: tag }
  }
  const questions = await Question.find(query)
    .populate('userId')
    .sort({ createdAt: -1 })
  res.render('index', { questions, filter })
}
