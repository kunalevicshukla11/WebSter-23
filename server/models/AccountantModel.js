import mongoose from "mongoose";

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
      },
      password: {
        type: String,
        required: true,
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
