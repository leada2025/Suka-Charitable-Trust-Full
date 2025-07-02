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

    // Newly Added Fields
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    address: {
      type: String,
    },
    reasonForJoining: {
      type: String,
    },
    areaOfInterest: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    age: {
      type: Number,
      min: 0,
    },
    dateOfBirth: {
      type: Date,
    },

    // For password reset
    resetToken: String,
    resetTokenExpiry: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
