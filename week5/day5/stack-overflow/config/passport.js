const passport = require('passport')
const User = require('../models/User')
const FacebookStrategy = require('passport-facebook').Strategy

const facebookConfig = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'https://stack-overdow.herokuapp.com/auth/facebook/callback',
  profileFields: ['id', 'email', 'gender', 'link', 'name', 'photos'],
}

// Facebook Strategy
passport.use(
  new FacebookStrategy(facebookConfig, async (_, __, profile, done) => {
    let user = await User.findOne({ facebookId: profile.id })
    if (!user) {
      user = await User.create({
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        facebookId: profile.id,
        email: profile.emails[0].value,
        photoURL: profile.photos[0].value,
      })
      return done(null, user)
    } else {
      return done(null, user)
    }
  })
)

// Local Strategy
passport.use(User.createStrategy())

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

// SerializeUser
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// DeserializeUser
// cambiaste esto wey, si no funciona el error esta aqui, por cambiar el codigo alv
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null))
})

module.exports = passport
