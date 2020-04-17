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
const {
  signupView,
  signupProcess,
  loginView,
  loginProcess,
  logout,
} = require("../controllers/auth");

const { profile } = require("../controllers/profile");

// -----------------------Middleware------------------------------------

function checkSession(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
}

//----------------------------------------------------------------------

//Movie

router.get("/movie", listView);
router.get("/movie/add", addView);
router.post("/movie/add", addMovieProcess);
router.get("/movie/:id", detailView);

// Auth

router.get("/signup", signupView);
router.post("/signup", signupProcess);
router.get("/login", loginView);
router.post("/login", loginProcess);
router.get("/logout", logout);

// Profile

router.get("/profile", checkSession, profile);

module.exports = router;
