const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const newsRoutes = require('./routes/newsRoutes');
const eventRoutes = require("./routes/eventRoutes");
const storyRoutes =require("./routes/storyRoutes")
const inquiryRoutes = require("./routes/inquiryRoutes");
const contactInfoRoutes = require("./routes/contactInfoRoutes")
const careerRoutes = require("./routes/CareerRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");




dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174','https://suka-charitable-trust-full-frontend.onrender.com','https://suka-charitable-trust-full-admin.onrender.com','www.sukacare.org'],
    credentials: true,
  })
);


app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
  res.send('SUKA Admin API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.use('/api/news', newsRoutes);

app.use("/api/events", eventRoutes);

app.use("/api/stories",storyRoutes)

app.use("/api/inquiries", inquiryRoutes);


app.use("/api/contact-info",contactInfoRoutes );

app.use("/api/careers", careerRoutes);

app.use("/api/subscribers", subscriberRoutes);

