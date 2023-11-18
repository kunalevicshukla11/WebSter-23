import { compare } from "bcrypt";
import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import { ComplaintModel as Complaint } from "../models/ComplaintModel.js";

//create new complaint..

const newComplaint = AsyncErrorHandler(async (req, res, next) => {
  const { name, heading, content, student } = req.body;

  if (!name) {
    return next(new Errorhandler("Enter the HostelName", 400));
  }
  if (!heading) {
    return next(new Errorhandler("Enter the Heading of your complaint", 400));
  }

  if (!content || content.length < 10) {
    return next(
      new Errorhandler(
        "Complaint length is too short. Please enter the valid complaint",
        400
      )
    );
  }

  if (!student) {
    return next(new Errorhandler("Student is required", 400));
  }

  const comp = await Complaint.findOne({ heading });
  if (comp) {
    return next(new Errorhandler("Complaint already exist", 400));
  }

  const newComp = await Complaint.create({
    name,
    heading,
    content,
    student,
  });

  res.status(200).json({
    success: true,
    message: "Complaint Registered Successfully!",
    newComp,
  });
});

const getAllComplaints = AsyncErrorHandler(async (req, res, next) => {
  const comp = await Complaint.find({}).populate("student");
  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    comp,
  });
});

const singleComplaint = AsyncErrorHandler(async (req, res, next) => {
  const { compID } = req.params;
  const comp = await Complaint.findById(compID).populate("student");

  res.status(200).json({
    success: true,
    message: "Fetched successfully!",
    comp,
  });
});

const deleteComplaint = AsyncErrorHandler(async (req, res, next) => {
  const { compID } = req.params;

  const comp = await Complaint.findByIdAndDelete(compID);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully!",
  });
});

const getSingleHostelComplaint = AsyncErrorHandler(async (req, res, next) => {
  const { HostelName } = req.params;

  const comp = await Complaint.find({ name: HostelName }).populate("student");
  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    comp,
  });
});

const updateUpvote = AsyncErrorHandler(async (req, res, next) => {
  const { compID } = req.params;
  const { totalUpvote, totalDownvote } = req.body;

  const updatedComp = await Complaint.findOneAndUpdate(
    { _id: compID },
    {
      upvote: totalUpvote,
      downvote: totalDownvote,
    }
  );
  res.status(200).json({
    success: true,
    message: "Upvoted",
    updatedComp,
  });
});

export {
  newComplaint,
  getAllComplaints,
  singleComplaint,
  deleteComplaint,
  getSingleHostelComplaint,
  updateUpvote,
};
