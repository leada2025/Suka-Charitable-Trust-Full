const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    date: String,
    title: String,
    location: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
