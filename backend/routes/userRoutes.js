const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware.js');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../Controllers/userController.js');

router.use(protect); // All below routes are protected

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
