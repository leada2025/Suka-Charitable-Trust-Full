const express = require('express');
const router = express.Router();
const newsController = require('../Controllers/newsController.js');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/news/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), newsController.createNews);
router.get('/', newsController.getAllNews);
router.put('/:id', upload.single('image'), newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

module.exports = router;
