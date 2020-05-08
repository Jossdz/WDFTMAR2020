const { Schema, model } = require('mongoose')

const countrySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    confirmed: Number,
    recovered: Number,
    deaths: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('Country', countrySchema)
