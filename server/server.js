const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/auth")

// server.js (top)
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // ensure correct .env path

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB Connected Successfully"))
.catch((err)=> console.log("MongoDB Connection Failed:", err));

// debug: show what was loaded
console.log('Loaded MONGO_URI:', !!process.env.MONGO_URI);
console.log('MONGO_URI (preview):', process.env.MONGO_URI ? process.env.MONGO_URI.slice(0,40) + '...' : undefined);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('FATAL: MONGO_URI is not defined. Check your .env file and variable name.');
  process.exit(1); // stop server so you don't run without DB
}

// Basic route

app.get("/", (req, res) => {
  res.send("Smart Ration System Backend Running");
});

// API Routes

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
