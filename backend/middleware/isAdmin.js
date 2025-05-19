// middlewares/isAdmin.js
const User = require('../models/User.js');

const isAdmin = async (req, res, next) => {
  const user = req.user;

  if (user && user.email === 'admin@suka.org' && user.role === 'Admin') {
    next(); // Authorized
  } else {
    res.status(403).json({ message: 'Access denied: Admins only' });
  }
};

module.exports = isAdmin;
