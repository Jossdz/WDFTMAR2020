exports.profile = (req, res) => {
  res.render("profile", req.session.currentUser);
};
