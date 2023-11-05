import express from "express";

import {
  RegisterStudent,
  RegisterAdmin,
  LoginStudent,
  LoginAdmin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register-student", RegisterStudent);
router.post("/register-admin", RegisterAdmin);

router.post("/login-student", LoginStudent);
router.post("/login-Admin", LoginAdmin);

export default router;
