const User = require('../models/User')
const passport = require('../config/passport')

exports.indexGet = (req, res) => res.render('index')

exports.signupGet = (req, res) => {
  const config = {
    action: '/signup',
    title: 'Sign up',
    button: 'Create account',
    signup: true,
  }
  res.render('form', config)
}

exports.signupPost = (req, res) => {
  const { name, email, password, verify } = req.body
  const config = {
    action: '/signup',
    title: 'Sign up',
    button: 'Create account',
    signup: true,
    error: 'The passwords doesnt match',
  }
  if (password !== verify) {
    return res.render('form', config)
  } else {
    User.register({ name, email }, password)
      .then(() => res.redirect('/login'))
      .catch((err) => {
        config.error = err.message
        return res.render('form', config)
      })
  }
}

exports.loginGet = (req, res) => {
  const config = {
    action: '/login',
    title: 'Log in',
    button: 'Login',
    signup: false,
  }
  res.render('form', config)
}

exports.loginPost = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
})

exports.profileGet = (req, res) => {
  const { user } = req
  res.render('profile', user)
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/login')
}
