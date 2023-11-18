import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import { VotingModel as Vote } from "../models/VotingModel.js";

const newUpvoteOrDownvote = AsyncErrorHandler(async (req, res, next) => {
  const { vote, votedBy, votedOn } = req.body;

  if (!vote) {
    return next(new Errorhandler("Vote is Requited", 400));
  }
  if (!votedBy) {
    return next(new Errorhandler("Student is required!", 400));
  }
  if (!votedOn) {
    return next(new Errorhandler("Complaint is Required!", 400));
  }

  const isVoted = await Vote.findOne({ votedBy, votedOn });

  if (isVoted) {
    return res.status(400).json({
      success: false,
      message: "User has already voted",
    });
  }

  const newVote = await Vote.create({ vote, votedBy, votedOn });

  res.status(200).json({
    success: true,
    message: "Voted Successfully!",
    newVote,
  });
});

const findUserVote = AsyncErrorHandler(async (req, res, next) => {
  const { votedBy, votedOn } = req.body;

  if (!votedBy) {
    return next(new Errorhandler("Student is required!", 400));
  }
  if (!votedOn) {
    return next(new Errorhandler("Complaint is Required!", 400));
  }

  const votedUser = await Vote.findOne({ votedBy, votedOn });

  if (votedUser) {
    res.status(200).json({
      success: true,
      votedUser,
    });
  } else {
    res.status(200).json({
      success: false,
      message: "User note found",
      votedUser: null,
    });
  }
});

const updateVote = AsyncErrorHandler(async (req, res, next) => {
  const { votedBy, votedOn, vote } = req.body;

  if (!vote) {
    return next(new Errorhandler("Vote is Requited", 400));
  }
  if (!votedBy) {
    return next(new Errorhandler("Student is required!", 400));
  }
  if (!votedOn) {
    return next(new Errorhandler("Complaint is Required!", 400));
  }

  const updatedVote = await Vote.findOneAndUpdate(
    { votedBy, votedOn },
    { vote: vote }
  );

  res.status(200).json({
    success: true,
    message: "Updated",
    updatedVote,
  });
});

export { newUpvoteOrDownvote, findUserVote, updateVote };
