const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Will store image filename
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);
