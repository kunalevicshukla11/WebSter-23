import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import moment from "moment";

import { ExpenseModel as Expense } from "../models/ExpenseModel.js";

const newExpense = AsyncErrorHandler(async (req, res, next) => {
  const {
    HostelName,
    title,
    amount,
    category,
    description,
    transactionType,
    date,
  } = req.body;

  if (!HostelName) {
    return next(new Errorhandler("HostelName is Required", 400));
  }
  if (!title) {
    return next(new Errorhandler("title is Required", 400));
  }
  if (!amount) {
    return next(new Errorhandler("ammount is Required", 400));
  }
  if (!category) {
    return next(new Errorhandler("category is Required", 400));
  }
  if (!description) {
    return next(new Errorhandler("description is Required", 400));
  }
  if (!transactionType) {
    return next(new Errorhandler("transactionType is Required", 400));
  }
  if (!date) {
    return next(new Errorhandler("date is Required", 400));
  }

  const exp = await Expense.create({
    HostelName,
    title,
    amount,
    category,
    description,
    transactionType,
    date,
  });
  res.status(200).json({
    success: true,
    message: "Created Successfully!",
    exp,
  });
});

const getAllExpense = AsyncErrorHandler(async (req, res, next) => {
  const exp = await Expense.find({});
  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    exp,
  });
});

const singleExpense = AsyncErrorHandler(async (req, res, next) => {
  const { expID } = req.params;
  const exp = await Expense.findById(expID).populate("content");

  res.status(200).json({
    success: true,
    message: "Fetched successfully!",
    exp,
  });
});

const deleteExpense = AsyncErrorHandler(async (req, res, next) => {
  const { expID } = req.params;

  const exp = await Expense.findByIdAndDelete(expID);

  if (!exp) {
    return next(new Errorhandler("Expense not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Deleted Successfully!",
  });
});

const getSingleHostelExpense = AsyncErrorHandler(async (req, res, next) => {
  const { HostelName, dateSpan } = req.body;
  if (!HostelName) {
    return next(new Errorhandler("HostelName is Required", 400));
  }
  const query = { HostelName: HostelName };

  if (dateSpan === 0) {
    const exp = await Expense.find({ HostelName: HostelName });
    res.status(200).json({
      success: true,
      message: "Fetched Successfully!",
      exp,
    });
  } else {
    query.date = {
      $gt: moment().subtract(dateSpan, "days").toDate(),
    };

    const exp = await Expense.find(query);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully!",
      exp,
    });
  }
});

export {
  newExpense,
  getAllExpense,
  singleExpense,
  deleteExpense,
  getSingleHostelExpense,
};
