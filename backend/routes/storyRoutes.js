const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Story = require("../models/Story");

const router = express.Router();

// Ensure persistent upload directory exists
const uploadPath = path.join(__dirname, "../uploads/data/stories");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer setup with persistent disk path
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// CREATE
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const newStory = new Story({
    title,
    description,
    image: req.file ? `/stories/${req.file.filename}` : null, // Store path relative to `/uploads`
  });
  await newStory.save();
  res.status(201).json(newStory);
});

// READ
router.get("/", async (req, res) => {
  const stories = await Story.find().sort({ _id: -1 });
  res.json(stories);
});

// DELETE (optional: delete image file too)
router.delete("/:id", async (req, res) => {
  const story = await Story.findById(req.params.id);
  if (story?.image) {
   const imagePath = path.join(__dirname, "../uploads/data", story.image);

    fs.unlink(imagePath, (err) => {
      if (err) console.warn("Failed to delete image:", err.message);
    });
  }
  await Story.findByIdAndDelete(req.params.id);
  res.json({ message: "Story deleted" });
});

// UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const updateData = { title, description };

  if (req.file) {
    updateData.image = `/stories/${req.file.filename}`;
  }

  try {
    const updatedStory = await Story.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedStory);
  } catch (err) {
    console.error("Error updating story:", err.message);
    res.status(500).json({ message: "Failed to update story" });
  }
});

module.exports = router;
