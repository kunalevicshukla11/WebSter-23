import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  HostelName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  amount: {
    type: Number,
    required: [true, "Amount is required"],
    default: 0,
  },

  category: {
    type: String,
    required: [true, "Category is required"],
  },

  description: {
    type: String,
    required: [true, "Description is required"],
  },
  transactionType: {
    type: String,
    required: [true, "Transaction Type is required"],
  },

  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const ExpenseModel = mongoose.model("Expense", ExpenseSchema);
