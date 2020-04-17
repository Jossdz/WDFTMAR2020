const express = require("express");
const router = express.Router();
const {
  addMovieProcess,
  addView,
  listView,
  detailView,
} = require("../controllers/movie");
/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

//Movie

router.get("/movie", listView);
router.get("/movie/add", addView);
router.post("/movie/add", addMovieProcess);
router.get("/movie/:id", detailView);

module.exports = router;
