import jwt from "jsonwebtoken";
import AsynkErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorHandler.js";
// import { userModel as User } from "../models/userModel.js";
import { studentModel as Student } from "../models/StudentModel.js";
import { adminModel as Admin } from "../models/AdminModel.js";

//protected Routes token base..
const requireSignIn = AsynkErrorHandler(async (req, res, next) => {
  const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  req.user = decode;
  next();
});

//check for admin...

// const isAdmin = AsynkErrorHandler(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   if (user.role !== 1) {
//     return next(new Errorhandler("UnAuthorized Access", 401));
//   }
//   next();
// });

export { requireSignIn };
