import mongoose, { Schema } from "mongoose";

const BannedUserSchema = new Schema({
  bannedUser: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
});

export const BannedUserModel = mongoose.model(
  "BannedStudent",
  BannedUserSchema
);
