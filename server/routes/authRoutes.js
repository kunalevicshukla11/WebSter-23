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
  banUser,
  unbanUser,
  checkBannedUser,
} from "../controllers/authController.js";
import {
  createMessMenu,
  getMessmenu,
} from "../controllers/messMenuController.js";

const router = express.Router();

router.post("/register-student", RegisterStudent);
router.post("/register-admin", RegisterAdmin);
router.post("/register-accountant", RegisterAccountant);
router.post("/register-studentrep", RegisterStudentRep);

router.post("/login-student", LoginStudent);
router.post("/login-Admin", LoginAdmin);
router.post("/login-accountant", LoginAccountant);
router.post("/login-studentrep", LoginStudentRep);

//ban user

router.post("/ban-user", banUser);

//unban user..

router.delete("/unban-user", unbanUser);

//check-banned-user

router.post("/check-banned-user", checkBannedUser);

//add mess menu..
router.post("/new-mess-menu", createMessMenu);

//get-mess-menu

router.post("/get-mess-menu", getMessmenu);

export default router;
