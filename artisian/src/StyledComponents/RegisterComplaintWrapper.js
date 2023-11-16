import styled from "styled-components";

const RegisterComplaintWrapper = styled.section`
  .content-container {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .content {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 400px;
  }
  .complaint-lable {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  .inp-txt {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .comp-button {
    background-color: var(--primary-600);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .comp-button:hover {
    background-color: var(--primary-700);
  }
  @media (max-width: 600px) {
    .content {
      max-width: 100%;
    }
  }
`;

export default RegisterComplaintWrapper;
