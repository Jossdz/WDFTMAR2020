const Question = require('../models/Question')
const User = require('../models/User')
const Answer = require('../models/Answer')

exports.createPost = async (req, res) => {
  const { title, body, tags } = req.body
  const { _id: userId } = req.user
  const arrTags = tags.split(',')
  const question = await Question.create({
    userId,
    title,
    body,
    tags: arrTags,
  })
  res.render('auth/profile', { status: true })
}

exports.detailGet = async (req, res) => {
  const { id } = req.params

  let loggedUser = ''
  let isLoggedIn = false
  const question = await Question.findById(id)
    .populate('userId')
    .populate({
      path: 'answers',
      populate: {
        path: 'userId',
        model: 'User',
      },
    })
  if (req.user) {
    loggedUser = req.user._id
    isLoggedIn = true
    if (String(req.user._id) === String(question.userId._id)) {
      isLoggedIn = false
    }
  }
  res.render('question', { question, isLoggedIn, loggedUser })
}

exports.createAnswerPost = async (req, res) => {
  const answer = await Answer.create({
    body: req.body.body,
    userId: req.user._id,
  })
  await Question.findByIdAndUpdate(
    req.params.id,
    { $push: { answers: answer._id } },
    { new: true }
  )
  res.redirect(`/questions/${req.params.id}`)
}

exports.deleteAnswerPost = async (req, res) => {
  await Answer.findByIdAndDelete(req.params.id)
  const { _id } = await Question.findOneAndUpdate(
    { answers: req.params.id },
    { $pull: { answers: req.params.id } }
  )
  res.redirect(`/questions/${_id}`)
}

exports.updateAnswerPost = async (req, res) => {
  await Answer.findByIdAndUpdate(req.params.aid, {
    $set: { body: req.body.body },
  })
  res.redirect(`/questions/${req.params.qid}`)
}
