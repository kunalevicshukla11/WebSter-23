import express from "express";

import {
  RegisterStudent,
  RegisterAdmin,
  LoginStudent,
  LoginAdmin,
  RegisterAccountant,
  LoginAccountant,
  RegisterStudentRep,
  LoginStudentRep,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register-student", RegisterStudent);
router.post("/register-admin", RegisterAdmin);
router.post("/register-accountant",RegisterAccountant);
router.post("/register-studentrep",RegisterStudentRep);


router.post("/login-student", LoginStudent);
router.post("/login-Admin", LoginAdmin);
router.post("/login-accountant",LoginAccountant);
router.post("/login-studentrep",LoginStudentRep);




export default router;
