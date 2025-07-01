const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin', 'Volunteer', 'Donor'],
      default: 'Volunteer',
    },
    resetToken: String,
resetTokenExpiry: Date,

  },
  { timestamps: true }


);

module.exports = mongoose.model('User', userSchema);
