const router = require('express').Router()
const { isLoggedIn } = require('../middlewares')
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  facebook,
  facebookCb,
  profileGet,
  logout,
} = require('../controllers/auth.controller')

router.get('/signup', signupGet)
router.post('/signup', signupPost)

router.get('/login', loginGet)
router.post('/login', loginPost)

router.get('/auth/facebook', facebook)
router.get('/auth/facebook/callback', facebookCb)

router.get('/profile', isLoggedIn, profileGet)

router.get('/logout', logout)

module.exports = router
