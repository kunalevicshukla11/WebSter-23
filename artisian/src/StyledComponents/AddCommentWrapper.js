import styled from "styled-components";

const AddCommentWrapper = styled.article`
  .comment-body {
    font-family: "Arial", sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .comment-container {
    max-width: 100%;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
  }
  .comment-form {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .comment-input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .comment-button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    .comment-form {
      flex-direction: column;
      align-items: stretch;
    }

    .comment-input {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export default AddCommentWrapper;
