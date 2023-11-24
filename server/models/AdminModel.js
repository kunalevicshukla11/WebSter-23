import mongoose from "mongoose";
import validator from "validator";

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    HostelID: {
      type: Number,
      required: true,
    },
    HostelName: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export const adminModel = mongoose.model("Admin", AdminSchema);
