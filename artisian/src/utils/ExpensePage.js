// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/userContext.js";

// import Exp from "../utils/Exp.js"

// const ExpensePage = (props) => {

//   const navigate = useNavigate();
//   const [auth, setAuth] = useAuth();

//   const [ExpData, setExpData] = useState([]);

//   // useEffect(() => {
//   //   getExpense();
//   // }, []);

//   var HostelName;

//   if(props.HostelName=== "Tandon"){
//     HostelName= "tandon"
//   }




//   const handleClick = (e) => {
//     e.preventDefault();
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });

//     localStorage.removeItem("auth");
//     navigate("/");
//   };


//   const getExpense = async () => {
//     const { data } = await axios.get(
//       `http://localhost:4000/api/v1/exp/all-expense/${HostelName}`
//     );
//     setExpData(data.exp);
//   };


//   return (
//     <div>
//       <h1>Expense page</h1>
//     </div>
//   )
// }

// export default ExpensePage
