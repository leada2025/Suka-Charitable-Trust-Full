const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit inquiry" });
  }
});

// inquiries route
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ count: inquiries.length, inquiries }); // ✅ Add count
  } catch (err) {
    res.status(500).json({ message: "Error retrieving inquiries" });
  }
});




// PATCH /inquiries/:id
router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ message: "Failed to update status." });
  }
});


module.exports = router;
