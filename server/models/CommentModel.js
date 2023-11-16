import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  commentedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  commentedOn: {
    type: mongoose.Schema.ObjectId,
    ref: "Complaint",
    required: true,
  },
});

export const CommentModel = mongoose.model("Comment", CommentSchema);
