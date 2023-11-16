import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  downvote: {
    type: Number,
    default: 0,
  },
});

export const ComplaintModel = mongoose.model("Complaint", ComplaintSchema);
