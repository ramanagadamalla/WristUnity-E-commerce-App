import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
      trim: true,
      default: 0,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 0,
    },
  },
  { timestamp: true }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
