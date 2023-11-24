import mongoose from "mongoose";
import validator from "validator";

const StudentSchema = new mongoose.Schema(
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
      minlength: 6,
    },
    branch: {
      type: String,
      required: true,
    },
    registrationNo: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

export const studentModel = mongoose.model("Student", StudentSchema);
