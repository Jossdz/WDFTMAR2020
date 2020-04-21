const Place = require("../models/Place");

exports.placesView = async (req, res) => {
  const places = await Place.find();
  res.render("index", { places });
};

exports.addView = (req, res) => {
  res.render("add");
};

exports.addProcess = async (req, res) => {
  const { name, description, longitude, latitude } = req.body;
  const location = {
    type: "Point",
    coordinates: [longitude, latitude],
  };
  await Place.create({
    name,
    description,
    location,
  });
  res.redirect("/");
};

exports.detailView = async (req, res) => {
  const { id } = req.params;

  const place = await Place.findById(id);

  res.render("detail", place);
};
