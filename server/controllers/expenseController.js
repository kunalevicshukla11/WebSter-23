import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";

import { ExpenseModel as Expense } from "../models/ExpenseModel.js"




const newExpense = AsyncErrorHandler(async (req, res, next) => {
    const {
        HostelID,
        HostelName,
        createdAt,
        content,
        vegetables,
        Panner,
        Milk,
        Gas,
        Rice,
        Wheat,
        Worker_Salary,
        Oil,
        Ice_cream,
        Miscellaneous,
        Utensils } = req.body

    if (!HostelID) {
        return next(new Errorhandler("Enter the HostelID", 400));
    }
    if (!HostelName) {
        return next(new Errorhandler("Enter the HostelName", 400));
    }
    if (!createdAt) {
        return next(new Errorhandler("Enter the data", 400));
    }


    const exp = await Expense.findOne({ content });

    if (exp) {
        return next(new Errorhandler("Expense already exisit", 400));
    }

    const newExp = await Expense.create({
        HostelID,
        HostelName,
        createdAt,
        content,
        vegetables,
        Panner,
        Milk,
        Gas,
        Rice,
        Wheat,
        Worker_Salary,
        Oil,
        Ice_cream,
        Miscellaneous,
        Utensils
    });

    res.status(200).json({
        success: true,
        message: "Expense Created",
        newExp,
    });
})



const getAllExpense = AsyncErrorHandler(async (req, res, next) => {
    const exp = await Expense.find({}).populate("content");
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
    const { HostelName } = req.params;
  
    const exp = await Complaint.find({ name: HostelName }).populate("content");
    res.status(200).json({
      success: true,
      message: "Fetched Successfully!",
      exp,
    });
  });


export {
    newExpense,
    getAllExpense,
    singleExpense,
    deleteExpense,
    getSingleHostelExpense
};