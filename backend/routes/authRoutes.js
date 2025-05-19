const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/authController.js');
const { signup} = require('../Controllers/authController.js');
const { forgotPassword } = require('../Controllers/authController.js');
const { resetPassword } = require('../Controllers/authController');

router.post('/login', login);
router.post('/signup', signup);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
