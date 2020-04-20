const mongoose = require('mongoose')
const elChocho = require('passport-local-mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    photoURL: {
      type: String,
      default:
        'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

// aqui le inyectamos el chocho
userSchema.plugin(elChocho, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)
