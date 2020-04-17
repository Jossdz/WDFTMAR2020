const express = require("express");
const router = express.Router();
const {
  addMovieProcess,
  addView,
  listView,
  detailView,
} = require("../controllers/movie");
router.get("/", (req, res) => {
  res.render("index");
});
const { signupView, signupProcess } = require("../controllers/auth");

// ------------------------------------------------------------

//Movie

router.get("/movie", listView);
router.get("/movie/add", addView);
router.post("/movie/add", addMovieProcess);
router.get("/movie/:id", detailView);

// Auth

router.get("/signup", signupView);
router.post("/signup", signupProcess);

module.exports = router;
