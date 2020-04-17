const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  image: String,
  description: String,
  genre: String,
});

module.exports = model("Movie", movieSchema);
