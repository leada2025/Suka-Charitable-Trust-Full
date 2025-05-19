const express = require("express");
const router = express.Router();
const Career = require("../models/Career.js");

// Get all careers, with optional filtering by category and status
router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.status) filter.status = req.query.status;

  try {
    const careers = await Career.find(filter);
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new career
router.post("/", async (req, res) => {
  const career = new Career({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status || "open",
  });

  try {
    const newCareer = await career.save();
    res.status(201).json(newCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a career by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedCareer = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // ensures validation on update
    );

    if (!updatedCareer) {
      return res.status(404).json({ message: "Career not found" });
    }

    res.json(updatedCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a career by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCareer = await Career.findByIdAndDelete(req.params.id);

    if (!deletedCareer) {
      return res.status(404).json({ message: "Career not found" });
    }

    res.json({ message: "Career deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
