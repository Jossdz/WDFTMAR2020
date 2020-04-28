const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photoURL: String,
    facebookId: String,
    googleId: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
