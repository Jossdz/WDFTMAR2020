const express = require("express");
const router = express.Router();
const uploadConfig = require("../config/cloudinary");
const {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} = require("../controllers/project");
/* GET home page */
router.get("/", (req, res, next) => {
  res.send("index");
});

router.post("/upload", uploadConfig.single("photo"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded"));
  }
  res.status(201).json({ secure_url: req.file.secure_url });
});

// CRUD PROJECTS

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProject);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

module.exports = router;
