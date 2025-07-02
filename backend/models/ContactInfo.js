const mongoose = require("mongoose");

const ContactInfoSchema = new mongoose.Schema({
  address: String,
  phone: String,
  email: String,
  website: String,
  officeHours: String,
  socialLinks: {
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
    linkedin: String,
  },
});

module.exports = mongoose.model("ContactInfo", ContactInfoSchema);
