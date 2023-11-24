import mongoose from "mongoose";
import validator from "validator";

const StudentRepSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
      default: 4,
    },
  },
  { timestamps: true }
);

export const StudentRepModel = mongoose.model("StudentRep", StudentRepSchema);
