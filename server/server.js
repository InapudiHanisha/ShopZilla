// 1. Import required packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// 2. Load environment variables from .env file
dotenv.config();

// 3. Create express app
const app = express();

// 4. Middleware
app.use(cors()); // To allow requests from frontend
app.use(express.json()); // To parse JSON body in requests

// 5. Test route
app.get("/", (req, res) => {
  res.send("ShopZilla Backend is Running ✅");
});

// 6. Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// 7. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✌️ Server running on port ${PORT}`);
});