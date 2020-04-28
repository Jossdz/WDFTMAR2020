const { Schema, model } = require('mongoose')

const questionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
      },
    ],
    title: String,
    body: String,
    tags: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Question', questionSchema)
