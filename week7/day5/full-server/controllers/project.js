//CRUD
const Project = require("../models/Project");

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.status("200").json({ projects });
};
exports.getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.status("200").json({ project });
};
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, done, imgUrl } = req.body;
  const project = await Project.findByIdAndUpdate(
    id,
    {
      name,
      description,
      done,
      imgUrl,
    },
    { new: true }
  );
  res.status("200").json({ project });
};
exports.createProject = async (req, res) => {
  // Por que no de req.file ?????????
  const { name, description, imgURL, imgName } = req.body;
  const owner = req.user.id;

  const project = await Project.create({
    name,
    description,
    owner,
    imgName,
    imgURL,
  });

  res.status(201).json({ project });
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};
