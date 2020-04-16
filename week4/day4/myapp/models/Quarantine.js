const { Schema, model } = require('mongoose')

const quarantineSchema = new Schema(
  {
    phase: {
      type: Number,
      min: 1,
      max: 4,
    },
    initialDate: String,
    estimatedDate: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Cuarentena', quarantineSchema)
