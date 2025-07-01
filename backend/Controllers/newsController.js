const News = require('../models/News');
const fs = require('fs');
const path = require('path');

const UPLOAD_DIR = path.join(__dirname, '../uploads/data/news'); // Absolute path for disk cleanup

// Create news
exports.createNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file?.filename;

    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const news = new News({
      title,
      description,
      image, // Just save the filename, not prefixed with 'news/'
    });

    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch news" });
  }
};

// Update news
exports.updateNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const news = await News.findById(id);
    if (!news) return res.status(404).json({ message: "News not found" });

    // If a new image is uploaded, delete the old one
    if (req.file) {
      if (news.image) {
        const oldImagePath = path.join(UPLOAD_DIR, news.image);
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }
      news.image = req.file.filename; // Save only filename
    }

    news.title = title || news.title;
    news.description = description || news.description;

    await news.save();
    res.json({ message: "News updated", news });
  } catch (err) {
    res.status(500).json({ message: "Failed to update news", error: err.message });
  }
};

// Delete news
exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) return res.status(404).json({ message: "News not found" });

    // Delete image from persistent disk
    if (news.image) {
      const imagePath = path.join(UPLOAD_DIR, news.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await News.findByIdAndDelete(id);
    res.json({ message: "News deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete news", error: err.message });
  }
};
