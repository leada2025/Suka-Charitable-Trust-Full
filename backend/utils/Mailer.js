const nodemailer = require("nodemailer");
require("dotenv").config();

// Transporter setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email sending function
const sendThankYouEmail = async (toEmail) => {
  await transporter.sendMail({
    from: `"SUKA Trust" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Thank You for Subscribing to SUKA Trust!",
    html: `
    <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;border:1px solid #e0e0e0;border-radius:8px;padding:20px;background-color:#f9f9f9;">
      <div style="text-align:center;margin-bottom:20px;">
        <img src="https://suka-charitable-trust-full-frontend.onrender.com/logof.png" alt="SUKA Logo" style="max-width:150px;margin-bottom:10px;" />
        <h2 style="color:#4b0082;">Welcome to SUKA Charitable Trust</h2>
      </div>

      <p style="font-size:16px;color:#333;">
        Dear Friend,
      </p>

      <p style="font-size:16px;color:#333;line-height:1.6;">
        Thank you for subscribing to <strong>SUKA Charitable Trust</strong>. Your support helps us continue our mission to bring transparency and compassion to kidney transplantation in India.
      </p>

      <p style="font-size:16px;color:#333;line-height:1.6;">
        As a subscriber, you'll receive updates on:
        <ul style="margin-left:20px;color:#333;">
          <li>Organ donation awareness</li>
          <li>Volunteer opportunities</li>
          <li>Success stories and testimonials</li>
          <li>Upcoming health camps & events</li>
        </ul>
      </p>

      <p style="font-size:16px;color:#333;line-height:1.6;">
        We’re excited to have you as part of our mission to save lives through ethical healthcare.
      </p>

      <div style="text-align:center;margin:30px 0;">
        <a href="https://sukacare.org" style="background-color:#4b0082;color:#fff;text-decoration:none;padding:12px 24px;border-radius:5px;display:inline-block;font-weight:bold;">
          Visit Our Website
        </a>
      </div>

      <hr style="margin:30px 0;" />

      <p style="font-size:14px;color:#777;text-align:center;">
        SUKA Charitable Trust<br/>
        Coimbatore, Tamil Nadu, India<br/>
        <a href="https://sukacare.org" style="color:#4b0082;">www.sukacare.org</a>
      </p>
    </div>
    `,
  });
};

module.exports = {
  transporter,
  sendThankYouEmail,
};
