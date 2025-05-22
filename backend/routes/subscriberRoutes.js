const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber.js");
const { sendThankYouEmail } = require("../utils/Mailer.js");


router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already subscribed" });

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    await sendThankYouEmail(email);

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
});

// subscribers route
router.get("/", async (req, res) => {
  try {
    const allSubscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json({ count: allSubscribers.length, subscribers: allSubscribers }); // ✅ Add count
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
