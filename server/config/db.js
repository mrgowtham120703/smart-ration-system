const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000, // optional: helps fail fast if Atlas is unreachable
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1); // optional: stop server if DB fails
  }
};

module.exports = connectDB;
