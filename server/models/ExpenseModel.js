import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    HostelID: {
        type: mongoose.Schema.ObjectId,
        ref: "Accountant",
        required: true,
    },
    HostelName: {
        type: mongoose.Schema.ObjectId,
        ref: "Accountant",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },

    content: {
        type: String,
        required: true,
        minlength: 20,
    },

    vegetables: {
        type: Number,
        required: true,
    },

    Panner: {
        type: Number,
        required: true,
    },

    Milk: {
        type: Number,
        required: true,
    },

    Gas: {
        type: Number,
        required: true,
    },

    Rice: {
        type: Number,
        required: true,
    },

    Wheat: {
        type: Number,
        required: true,
    },


    Worker_Salary: {
        type: Number,
        required: true,
    },

    Oil: {
        type: Number,
        required: true,
    },

    Ice_cream: {
        type: Number,
        required: true,
    },

    Miscellaneous: {
        type: Number,
        required: true,
    },

    Utensils: {
        type: Number,
        required: true,
    },

})

export const ExpenseModel = mongoose.model("Expense", ExpenseSchema);
