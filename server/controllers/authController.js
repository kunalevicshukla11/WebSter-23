import { studentModel as Student } from "../models/StudentModel.js";
import { adminModel as Admin } from "../models/AdminModel.js";

//register Student
const RegisterStudent = async (req, res, next) => {
  const { name, email, password, registrationNo, branch } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Enter the name",
    });
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Enter the Email",
    });
  }
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Enter the password",
    });
  }
  if (!registrationNo) {
    return res.status(400).json({
      success: false,
      message: "Enter the registrationNo",
    });
  }
  if (!branch) {
    return res.status(400).json({
      success: false,
      message: "Enter the branch",
    });
  }

  const student = await Student.findOne({ email });

  if (student) {
    return res.status(400).json({
      success: false,
      message: "Student Already exist",
    });
  }

  const newStudent = await Student.create({
    name,
    email,
    password,
    registrationNo,
    branch,
  });
  res.status(200).json({
    success: true,
    message: "Student Registered Successfully!",
    newStudent,
  });
};

//Register Admin
const RegisterAdmin = async (req, res, next) => {
  const { name, email, password, HostelID, HostelName } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Enter the name",
    });
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Enter the Email",
    });
  }
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Enter the password",
    });
  }
  if (!HostelID) {
    return res.status(400).json({
      success: false,
      message: "Enter the HostelID",
    });
  }
  if (!HostelName) {
    return res.status(400).json({
      success: false,
      message: "Enter the HostelName",
    });
  }

  const admin = await Admin.findOne({ email });

  if (admin) {
    return res.status(400).json({
      success: false,
      message: "Admin Already exist",
    });
  }

  const newAdmin = await Admin.create({
    name,
    email,
    password,
    HostelID,
    HostelName,
  });
  res.status(200).json({
    success: true,
    message: "new Admin Registered Successfully!",
    newAdmin,
  });
};

//Login for Student..

const LoginStudent = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "Enter all fields",
    });
  }

  const user = await Student.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Not found!",
    });
  }

  if (password === user.password) {
    res.status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
};

//Login for Admin..

const LoginAdmin = async (req, res, next) => {
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

  if (password === user.password) {
    res.status(200).json({
      success: true,
      message: "Login Successfull! Redirecting",
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect Password",
    });
  }
};

export { RegisterStudent, RegisterAdmin, LoginStudent, LoginAdmin };
