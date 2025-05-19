// routes/storyRoutes.js
const express = require("express");
const multer = require("multer");
const Story = require("../models/Story");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/stories"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// CREATE
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const newStory = new Story({
    title,
    description,
    image: req.file.filename,
  });
  await newStory.save();
  res.status(201).json(newStory);
});

// READ
router.get("/", async (req, res) => {
  const stories = await Story.find().sort({ _id: -1 });
  res.json(stories);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Story.findByIdAndDelete(req.params.id);
  res.json({ message: "Story deleted" });
});

module.exports = router; // ✅ Use CommonJS export
