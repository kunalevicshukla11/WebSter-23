import { studentModel as Student } from "../models/StudentModel.js";
import { adminModel as Admin } from "../models/AdminModel.js";
import { accountantModel as Account } from "../models/AccountantModel.js";
import { StudentRepModel as StudentRep } from "../models/StudentRepModel.js";
import { BannedUserModel as BannedUser } from "../models/BannedUsersModel.js";

import { comparePassword, hashPassword } from "../helper/auth.js";
import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import jwt from "jsonwebtoken";

const RegisterStudent = AsyncErrorHandler(async (req, res, next) => {
  const { name, email, password, registrationNo, branch } = req.body;

  if (!name) {
    return next(new Errorhandler("Please Enter your Name", 400));
  }
  if (!email) {
    return next(new Errorhandler("Please Enter your email", 400));
  }
  if (!password) {
    return next(new Errorhandler("Please Enter your Password", 400));
  }
  if (!registrationNo) {
    return next(new Errorhandler("Please Enter your RegistrationNo", 400));
  }
  if (!branch) {
    return next(new Errorhandler("Please Enter your Branch", 400));
  }

  const student = await Student.findOne({ email });

  if (student) {
    return res.status(400).json({
      success: false,
      message: "Student Already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newStudent = await Student.create({
    name,
    email,
    password: hashedPassword,
    registrationNo,
    branch,
  });

  const token = await jwt.sign(
    { _id: newStudent._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  res.cookie("jwtoken", token, options).status(200).json({
    success: true,
    message: "Student Registered Successfully!",
    token,
    newStudent,
  });
});

//Register Admin
const RegisterAdmin = AsyncErrorHandler(async (req, res, next) => {
  const { name, email, password, HostelID, HostelName } = req.body;

  if (!name) {
    return next(new Errorhandler("Please Enter your Name", 400));
  }
  if (!email) {
    return next(new Errorhandler("Please Enter your Email", 400));
  }
  if (!password) {
    return next(new Errorhandler("Please Enter your Password", 400));
  }
  if (!HostelID) {
    return next(new Errorhandler("Please Enter your HostelID", 400));
  }
  if (!HostelName) {
    return next(new Errorhandler("Please Enter your HostelName", 400));
  }

  const admin = await Admin.findOne({ email });

  if (admin) {
    return res.status(400).json({
      success: false,
      message: "Admin Already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newAdmin = await Admin.create({
    name,
    email,
    password: hashedPassword,
    HostelID,
    HostelName,
  });
  const token = await jwt.sign({ _id: newAdmin._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  res.cookie("jwtoken", token, options).status(200).json({
    success: true,
    message: "New Admin Registered Successfully!",
    token,
    newAdmin,
  });
});

//Login for Student..

const LoginStudent = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Errorhandler("Please Enter All fields", 400));
  }

  const user = await Student.findOne({ email });
  if (!user) {
    return next(new Errorhandler("User Does Not Exist", 400));
  }

  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  const isMatch = await comparePassword(password, user.password);

  if (isMatch) {
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
      token,
      user,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
});

//Login for Admin..

const LoginAdmin = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "Enter all fields",
    });
  }

  const user = await Admin.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Not found!",
    });
  }
  const isMatch = await comparePassword(password, user.password);
  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  if (isMatch) {
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
      token,
      user,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
});

// register for accountant
const RegisterAccountant = AsyncErrorHandler(async (req, res, next) => {
  const { name, email, password, HostelID, HostelName } = req.body;

  if (!name) {
    return next(new Errorhandler("Please Enter your Name", 400));
  }
  if (!email) {
    return next(new Errorhandler("Please Enter your Email", 400));
  }
  if (!password) {
    return next(new Errorhandler("Please Enter your Password", 400));
  }
  if (!HostelID) {
    return next(new Errorhandler("Please Enter your HostelID", 400));
  }
  if (!HostelName) {
    return next(new Errorhandler("Please Enter your HostelName", 400));
  }

  const admin = await Account.findOne({ email });

  if (admin) {
    return res.status(400).json({
      success: false,
      message: "Admin Already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newAdmin = await Account.create({
    name,
    email,
    password: hashedPassword,
    HostelID,
    HostelName,
  });
  const token = await jwt.sign({ _id: newAdmin._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  res.cookie("jwtoken", token, options).status(200).json({
    success: true,
    message: "New Accountant Registered Successfully!",
    token,
    newAdmin,
  });
});

//login for accountant

const LoginAccountant = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "Enter all fields",
    });
  }

  const user = await Account.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Not found!",
    });
  }
  const isMatch = await comparePassword(password, user.password);
  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  if (isMatch) {
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
      token,
      user,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
});

//Login for Student..

const LoginStudentRep = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Errorhandler("Please Enter All fields", 400));
  }

  const user = await StudentRep.findOne({ email });
  if (!user) {
    return next(new Errorhandler("User Does Not Exist", 400));
  }

  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  const isMatch = await comparePassword(password, user.password);

  if (isMatch) {
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
      token,
      user,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
});

const RegisterStudentRep = AsyncErrorHandler(async (req, res, next) => {
  const { name, email, password, registrationNo, branch } = req.body;

  if (!name) {
    return next(new Errorhandler("Please Enter your Name", 400));
  }
  if (!email) {
    return next(new Errorhandler("Please Enter your email", 400));
  }
  if (!password) {
    return next(new Errorhandler("Please Enter your Password", 400));
  }
  if (!registrationNo) {
    return next(new Errorhandler("Please Enter your RegistrationNo", 400));
  }
  if (!branch) {
    return next(new Errorhandler("Please Enter your Branch", 400));
  }

  const student = await StudentRep.findOne({ email });

  if (student) {
    return res.status(400).json({
      success: false,
      message: "Student Already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newStudent = await StudentRep.create({
    name,
    email,
    password: hashedPassword,
    registrationNo,
    branch,
  });

  const token = await jwt.sign(
    { _id: newStudent._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  };
  res.cookie("jwtoken", token, options).status(200).json({
    success: true,
    message: "Studentrep Registered Successfully!",
    token,
    newStudent,
  });
});

const banUser = AsyncErrorHandler(async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return next(new Errorhandler("student is required!", 400));
  }
  const oldBanned = await BannedUser.findOne({ bannedUser: userId });
  if (oldBanned) {
    return res.status(400).json({
      success: true,
      message: "User already banned",
      userId: null,
    });
  }

  const user = await BannedUser.create({ bannedUser: userId });

  res.status(200).json({
    success: true,
    message: "User Banned!!",
    userId,
  });
});

const unbanUser = AsyncErrorHandler(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return next(new Errorhandler("Student is Required!!", 400));
  }

  const user = await BannedUser.findOneAndDelete({ bannedUser: userId });

  res.status(200).json({
    success: true,
    message: "Unbanned User",
    user,
  });
});

const checkBannedUser = AsyncErrorHandler(async (req, res, next) => {
  const { userId } = req.body;

  const user = await BannedUser.findOne({ bannedUser: userId });

  if (!user) {
    res.status(200).json({
      success: true,
      student: null,
    });
  } else {
    res.status(200).json({
      success: true,
      student: user,
    });
  }
});

export {
  RegisterStudent,
  RegisterAdmin,
  LoginStudent,
  LoginAdmin,
  RegisterAccountant,
  LoginAccountant,
  RegisterStudentRep,
  LoginStudentRep,
  banUser,
  unbanUser,
  checkBannedUser,
};
