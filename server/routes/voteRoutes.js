import express from "express";

import {
  newUpvoteOrDownvote,
  findUserVote,
  updateVote,
} from "../controllers/VotingController.js";

const router = express.Router();

router.post("/new-vote", newUpvoteOrDownvote);

router.post("/find-uservote", findUserVote);

router.put("/update-uservote", updateVote);

export default router;
