const User = require('../models/User')
const passport = require('../config/passport')

exports.signupGet = (req, res) => res.render('auth/signup')

exports.signupPost = (req, res) => {
  const { name, email, password, verify } = req.body
  User.register({ name, email }, password)
    .then((user) => res.redirect('/login'))
    .catch((err) => res.render('auth/signup', { err: err.message }))
}

exports.loginGet = (req, res) => res.render('auth/login')

exports.loginPost = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
})

exports.facebook = passport.authenticate('facebook', { scope: ['email'] })

exports.facebookCb = passport.authenticate('facebook', {
  scope: ['email'],
  failureRedirect: '/login',
  successRedirect: '/profile',
})

exports.profileGet = (req, res) => res.render('auth/profile')

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/login')
}
