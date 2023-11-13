import express from "express";

import {
  newComplaint,
  getAllComplaints,
  singleComplaint,
  deleteComplaint,
} from "../controllers/complaintController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

//create a new complaint.
router.post("/new-complaint", requireSignIn, newComplaint);

//get all complaints.
router.get("/get-all-complaints", requireSignIn, getAllComplaints);

//simgle complaint..

router.get("/sigle-complaint/:compID", requireSignIn, singleComplaint);

//delete-complaint...

router.delete("/delete-comp/:compID", requireSignIn, deleteComplaint);

export default router;
