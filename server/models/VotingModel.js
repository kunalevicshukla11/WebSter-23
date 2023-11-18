import mongoose, { Schema } from "mongoose";

const VotingSchema = new Schema({
  vote: {
    type: Number,
    default: 0,
  },
  votedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  votedOn: {
    type: mongoose.Schema.ObjectId,
    ref: "Complaint",
    required: true,
  },
});

export const VotingModel = mongoose.model("Vote", VotingSchema);
