const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Create event
router.post("/", async (req, res) => {
  try {
    const { date, title, location } = req.body;
    const event = new Event({ date, title, location });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: "Error creating event", error: err.message });
  }
});

// Get all events
// GET /api/events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // Optional: sort by date
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});


// Update event
router.put("/:id", async (req, res) => {
  try {
    const { date, title, location } = req.body;
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      { date, title, location },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating event" });
  }
});

// Delete event
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting event" });
  }
});

module.exports = router;
