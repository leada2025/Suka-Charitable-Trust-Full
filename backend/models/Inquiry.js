const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    status: {
      type: String,
      enum: ["Pending", "Inquired"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", InquirySchema);
