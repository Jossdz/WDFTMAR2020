exports.isLoggedIn = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect('/login')

exports.isNotLoggedIn = (req, res, next) =>
  !req.isAuthenticated() ? next() : res.redirect('/profile')
