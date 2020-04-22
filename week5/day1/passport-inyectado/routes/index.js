const router = require('express').Router()
const passport = require('passport')

const {
  indexGet,
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  profileGet,
  logout,
  loginFacebook,
  loginFacebookCb,
  adminGet,
} = require('../controllers')

const { isLoggedIn, isNotLoggedIn, checkRole } = require('../middlewares')

router.get('/', indexGet)

router.get('/signup', isNotLoggedIn, signupGet)
router.post('/signup', signupPost)

router.get('/login', isNotLoggedIn, loginGet)
router.post('/login', loginPost)

router.get('/auth/facebook', loginFacebook)
router.get('/auth/facebook/callback', loginFacebookCb)

router.get('/profile', isLoggedIn, profileGet)

router.get('/admin', isLoggedIn, checkRole('ADMIN'), adminGet)

router.get('/logout', logout)

module.exports = router
