import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import { CommentModel as Comment } from "../models/CommentModel.js";

const newComment = AsyncErrorHandler(async (req, res, next) => {
  const { content, commentedBy, commentedOn } = req.body;

  if (!content) {
    return next(new Errorhandler("Content is Required!", 400));
  }
  if (!commentedBy) {
    return next(new Errorhandler("User is Required!!", 400));
  }

  if (!commentedOn) {
    return next(new Errorhandler("Complaint is Required!", 400));
  }

  const comment = await Comment.create({ content, commentedBy, commentedOn });

  res.status(200).json({
    success: true,
    message: "Comment Added!",
    comment,
  });
});

const getComment = AsyncErrorHandler(async (req, res, next) => {
  const { CompID } = req.params;
  const comments = await Comment.find({ commentedOn: CompID }).populate(
    "commentedBy"
  );

  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    comments,
  });
});

export { newComment, getComment };
