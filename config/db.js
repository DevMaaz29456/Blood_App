const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env file");
    }

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MongoDB Database error: ${error.message}`.bgRed.white);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDB;
