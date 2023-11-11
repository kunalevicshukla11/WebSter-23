import express from "express";

import {
  newComplaint,
  getAllComplaints,
  singleComplaint,
  deleteComplaint,
} from "../controllers/complaintController.js";

const router = express.Router();

//create a new complaint.
router.post("/new-complaint", newComplaint);

//get all complaints.
router.get("/get-all-complaints", getAllComplaints);

//simgle complaint..

router.get("/sigle-complaint/:compID", singleComplaint);

//delete-complaint...

router.delete("/delete-comp/:compID", deleteComplaint);

export default router;
