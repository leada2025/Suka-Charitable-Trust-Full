const express = require("express");
const router = express.Router();
const ContactInfo = require("../models/ContactInfo.js");

// GET
router.get("/", async (req, res) => {
  const info = await ContactInfo.findOne();
  res.json(info);
});

// POST (Add)
router.post("/", async (req, res) => {
  const info = new ContactInfo(req.body);
  await info.save();
  res.status(201).json(info);
});

// PUT (Update)
router.put("/:id", async (req, res) => {
  const updated = await ContactInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
