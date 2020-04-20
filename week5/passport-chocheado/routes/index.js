const router = require('express').Router()

const {
  indexGet,
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  profileGet,
  logout,
} = require('../controllers')

const { isLoggedIn, isNotLoggedIn } = require('../middlewares')

router.get('/', indexGet)

router.get('/signup', isNotLoggedIn, signupGet)
router.post('/signup', signupPost)

router.get('/login', isNotLoggedIn, loginGet)
router.post('/login', loginPost)

router.get('/profile', isLoggedIn, profileGet)

router.get('/logout', logout)

module.exports = router
