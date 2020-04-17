const Movie = require("../models/movie");

exports.listView = async (req, res) => {
  const movies = await Movie.find();
  console.log(movies);
  res.render("movie/list", { movies });
};

exports.addView = (req, res) => {
  res.render("movie/add");
};

exports.addMovieProcess = async (req, res) => {
  const { title, description, image, genre } = req.body;

  await Movie.create({
    title,
    description,
    image,
    genre,
  });

  res.redirect("/movie");
};

exports.detailView = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("movie/detail", movie);
};
