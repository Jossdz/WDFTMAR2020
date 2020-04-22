exports.isLoggedIn = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect('/login')

exports.isNotLoggedIn = (req, res, next) =>
  !req.isAuthenticated() ? next() : res.redirect('/profile')

// exports.checkRole = (role) => {
//   return (req, res, next) => {
//     if (role === req.user.role) {
//       next()
//     } else {
//       res.redirect('/profile')
//     }
//   }
// }

exports.checkRole = (role) => (req, res, next) =>
  role === req.user.role ? next() : res.redirect('/profile')
