import express from "express";

import { newComment, getComment } from "../controllers/commentController.js";

const router = express.Router();

router.post("/new-comment", newComment);
router.get("/get-comments/:CompID", getComment);

export default router;
