const express = require("express");
const router = express.Router();

const { placesView } = require("../controllers/place");

/* GET home page */
router.get("/", placesView);

module.exports = router;
