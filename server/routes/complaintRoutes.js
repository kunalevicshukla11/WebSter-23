import express from "express";

import {
  newComplaint,
  getAllComplaints,
  singleComplaint,
  deleteComplaint,
  getSingleHostelComplaint,
  updateUpvote,
} from "../controllers/complaintController.js";

import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

//create a new complaint.
router.post("/new-complaint", newComplaint);

//get all complaints.
router.get("/get-all-complaints", requireSignIn, getAllComplaints);

//simgle complaint..

router.get("/sigle-complaint/:compID", singleComplaint);

//delete-complaint...

router.delete("/delete-comp/:compID", requireSignIn, deleteComplaint);

//complaint - by hostels
router.get("/all-complaints/:HostelName", getSingleHostelComplaint);

//update vote.
router.put("/update-vote/:compID", updateUpvote);

export default router;
