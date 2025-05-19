const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { 
    type: String, 
    required: function() {
      // description required if category is not Internship
      return this.category !== "Internship";
    }
  },
  category: { type: String, enum: ["Job", "Internship"], required: true },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Career", careerSchema);
