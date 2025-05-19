const nodemailer = require("nodemailer");


require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // or 587 as I suggested earlier
  secure: true, // use SSL for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transporter;




const sendThankYouEmail = async (toEmail) => {
  await transporter.sendMail({
    from: `"SUKA Trust" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Thank You for Subscribing!",
    html: `<p>Thank you for subscribing to SUKA Charitable Trust. We're glad to have you with us!</p>`,
  });
};

module.exports = sendThankYouEmail;
