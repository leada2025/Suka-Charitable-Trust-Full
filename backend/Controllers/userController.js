const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

// @desc Get all users
// @desc Get all users or search users by query
exports.getUsers = async (req, res) => {
  const { search } = req.query;

  let filter = {};
  if (search) {
    const regex = new RegExp(search, "i"); // case-insensitive search
    filter = {
      $or: [{ name: regex }, { email: regex }, { phone: regex }],
    };
  }

  const count = await User.countDocuments(filter);
  

  const users = await User.find(filter).select("-password");
 res.json({ count, users });
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};



// @desc Create new user
exports.createUser = async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
    role,
    bloodGroup,
    address,
    reasonForJoining,
    areaOfInterest,
    gender,
    age,
    dateOfBirth,
  } = req.body;

  // Check if email already exists
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user with additional fields
  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword,
    role,
    bloodGroup,
    address,
    reasonForJoining,
    areaOfInterest,
    gender,
    age,
    dateOfBirth,
  });

  await user.save();
  res.status(201).json({ message: 'User created' });
};

// @desc Update user
// @desc Update user
exports.updateUser = async (req, res) => {
  const {
    name,
    email,
    phone,
    role,
    bloodGroup,
    address,
    reasonForJoining,
    areaOfInterest,
    gender,
    age,
    dateOfBirth,
  } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
      role,
      bloodGroup,
      address,
      reasonForJoining,
      areaOfInterest,
      gender,
      age,
      dateOfBirth,
    },
    { new: true }
  );

  res.json({ message: 'User updated', user });
};

// @desc Delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};
