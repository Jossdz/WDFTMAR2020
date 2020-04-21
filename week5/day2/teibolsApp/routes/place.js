const { Router } = require("express");
const { addView, addProcess, detailView } = require("../controllers/place");

const router = Router();

router.get("/add", addView);
router.post("/add", addProcess);
router.get("/:id", detailView);

module.exports = router;
