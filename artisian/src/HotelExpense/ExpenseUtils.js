import React, { useEffect, useState } from "react";
import ExpenseUtilsWrapper from "../StyledComponents/ExpenseUtilsWrapper";
import axios from "axios";
import SingleTable from "./SingleTable";
import { useToast } from "@chakra-ui/react";
import ChartData from "./ChartData.js";

const ExpenseUtils = ({ HostelName }) => {
  //seting transactions..
  const [WeeklyTransaction, setWeeklyTransaction] = useState([]);
  const [MonthlyTransaction, setMonthlyTransaction] = useState([]);
  const [YearlyTransaction, setYearlyTransaction] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [isTable, setIsTable] = useState(1);
  const toast = useToast();
  const [time, setTime] = useState(0);

  //getting form data..
  const [title, setTitle] = useState();
  const [category, setCategory] = useState("Grosary");
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [transactionType, setTransactionType] = useState("Expense");
  const [sub, setSub] = useState(1);

  const toggleForm = () => {
    var form = document.getElementById("expenseForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  };

  const closeForm = () => {
    document.getElementById("expenseForm").style.display = "none";
  };

  const getWeeklyTransaction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/exp/single-hostel-expense",
        { HostelName: HostelName, dateSpan: 7 }
      );
      setWeeklyTransaction(res?.data?.exp);
    } catch (error) {
      console.log(error);
    }
  };
  const getMonthlyTransaction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/exp/single-hostel-expense",
        {
          dateSpan: 30,
          HostelName: HostelName,
        }
      );
      setMonthlyTransaction(res?.data?.exp);
    } catch (error) {
      console.log(error);
    }
  };
  const getYearlyTransaction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/exp/single-hostel-expense",
        {
          dateSpan: 365,
          HostelName: HostelName,
        }
      );
      setYearlyTransaction(res?.data?.exp);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTransaction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/exp/single-hostel-expense",
        {
          dateSpan: 0,
          HostelName: HostelName,
        }
      );
      setTransaction(res?.data?.exp);
      setAllTransactions(res?.data?.exp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/exp/new-expense",
        {
          title,
          date,
          HostelName,
          description,
          amount,
          transactionType,
          category,
        }
      );
      toast({
        title: `Added!`,
        description: "Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setSub(sub === 1 ? 0 : 1);
    } catch (error) {
      toast({
        title: `${error.response.data.message}`,
        description: "Error",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      console.log(error);
    }
  };
  useEffect(() => {
    getAllTransaction();
    getWeeklyTransaction();
    getMonthlyTransaction();
    getYearlyTransaction();
  }, [sub]);

  const handleWeelyExpense = () => {
    setTransaction(WeeklyTransaction);
    setTime(7);
  };

  const handleMonthlyExpense = () => {
    setTransaction(MonthlyTransaction);
    setTime(30);
  };

  const handleYearlyExpense = () => {
    setTransaction(YearlyTransaction);
    setTime(0);
  };
  const handleAllExpense = () => {
    setTransaction(allTransactions);
  };
  const toggleData = () => {
    setIsTable(isTable === 1 ? 0 : 1);
  };

  return (
    <>
      <div>
        <ExpenseUtilsWrapper>
          <div className="ExpenseBody">
            <button className="btn toggle-btn" onClick={toggleData}>
              {isTable === 1 ? "Chart Data" : "Table Data"}
            </button>
            <button className="btn edit-btn" onClick={handleWeelyExpense}>
              Weekly
            </button>
            <button className="btn edit-btn" onClick={handleMonthlyExpense}>
              Monthly
            </button>
            <button className="btn edit-btn" onClick={handleYearlyExpense}>
              Yearly
            </button>
            <button className="btn edit-btn" onClick={handleAllExpense}>
              All
            </button>
            <button className="btn hero-btn" onClick={toggleForm}>
              New Transaction
            </button>

            <div className="expense-form" id="expenseForm">
              <h2>Add Transaction</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Grosary">Grosary</option>
                  <option value="Milk">Milk</option>
                  <option value="Gas">Gas</option>
                  <option value="Utensils">Utensils</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Wage">Workers's Monthly Wages</option>
                  <option value="plumberFee">Plumber's Fee</option>
                </select>
                <label htmlFor="transaction">transactionType:</label>
                <select
                  id="transaction"
                  name="transaction"
                  required
                  onChange={(e) => setTransactionType(e.target.value)}
                >
                  <option value="Expense">Expense</option>
                  <option value="Income">Income</option>
                </select>

                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  onChange={(e) => setAmount(e.target.value)}
                />

                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="button-container">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={closeForm}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ExpenseUtilsWrapper>
        {isTable === 1 ? (
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <SingleTable data={transaction} />
          </div>
        ) : (
          <>
            <ChartData data={transaction} time={time} />
          </>
        )}
      </div>
    </>
  );
};

export default ExpenseUtils;
