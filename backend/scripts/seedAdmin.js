const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    const existing = await User.findOne({ email: 'admin@suka.org' });

    if (existing) {
      console.log('Admin already exists');
    } else {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new User({
        name: 'SUKA Admin',
        email: 'admin@suka.org',
        phone: '9876543210',       // add a valid 10-digit phone
        password: hashedPassword,
        role: 'Admin',             // capitalize Admin
      });

      await admin.save();
      console.log('✅ Admin user created');
    }

    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed admin:', err);
    process.exit(1);
  }
};

seedAdmin();
