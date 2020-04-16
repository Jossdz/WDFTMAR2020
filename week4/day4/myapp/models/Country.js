const { Schema, model } = require('mongoose')

const countrySchema = new Schema(
  {
    name: String,
    confirmed: Number,
    recovered: Number,
    deaths: Number,
    quarantine: {
      type: Schema.Types.ObjectId,
      ref: 'Cuarentena',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Country', countrySchema)
