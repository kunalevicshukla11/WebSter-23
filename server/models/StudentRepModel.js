import mongoose from "mongoose";

const StudentRepSchema = new mongoose.Schema(
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
        default: 4,
      },
    },
    { timestamps: true }
);

export const StudentRepModel = mongoose.model("StudentRep", StudentRepSchema);
