import mongoose from "mongoose";

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
    },
    password: {
      type: String,
      required: true,
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
