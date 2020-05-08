const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: String,
    description: String,
    imgURL: String,
    imgName: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Project", projectSchema);
