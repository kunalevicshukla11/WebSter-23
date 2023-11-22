import styled from "styled-components";

const MessUtilsWrapper = styled.section`
  .ExpenseBody {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px; /* Add padding to create space around the button */
    display: flex;
    align-items: flex-start; /* Align items to the top */
    justify-content: flex-end; /* Align items to the right */
    min-height: 20px;
    background-color: #0b6475;
  }

  button {
    padding: 10px 20px;

    margin-left: 10px;
  }
  .hero-btn {
    background-color: #4caf50;
    color: #fff;
  }
  .toggle-btn {
    background-color: #a18c18;
  }
  .hero-btn: hover {
    background-color: #04701c;
  }
  .toggle-btn:hover {
    background-color: #736309;
  }

  .expense-form {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-width: 90%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    height: auto;
    overflow: auto;
  }
  .expense-form::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: hide scrollbar gutter background */
  }

  h2 {
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #555;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type="submit"],
  button[type="button"] {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  button[type="button"] {
    background-color: #ccc;
    margin-right: 10px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  /* Responsive Styles */
  @media screen and (max-width: 600px) {
    .expense-form {
      height: auto;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    .expense-form {
      height: 400px;
    }
  }

  @media screen and (min-width: 1025px) {
    .expense-form {
      height: 500px;
    }
  }
`;

export default MessUtilsWrapper;
