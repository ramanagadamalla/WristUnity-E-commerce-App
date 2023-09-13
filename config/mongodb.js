import mongoose from "mongoose";
import dotenv from "dotenv";
const dbConnect = async () => {
  try {
    // Replace 'process.env.MONGOCONNECT' with your actual MongoDB URI.
    const mongoURI = process.env.MONGOCONNECT;

    // Connect to MongoDB using Mongoose.
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default dbConnect;
