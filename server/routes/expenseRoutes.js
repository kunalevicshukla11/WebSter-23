import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";

import {
    newExpense,
    getAllExpense,
    singleExpense,
    deleteExpense,
    getSingleHostelExpense,
} from "../controllers/expenseController.js"


const router = express.Router();

// creating new expense
router.post("/new-expense", newExpense);

// fetching all expenses
router.get("/get-all-expense", requireSignIn, getAllExpense);

// single expense
router.get("/sigle-expense/:ExpID", singleExpense);

// deleting expense
router.delete("/delete-expense/:ExpeID", requireSignIn, deleteExpense);

router.get("/all-expense/:HostelName", getSingleHostelExpense);




export default router;

