import mongoose from "mongoose";
import validator from "validator";

const AccountantSchema = new mongoose.Schema(
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
      default: 3,
    },
  },
  { timestamps: true }
);

export const accountantModel = mongoose.model("Accountant", AccountantSchema);
