import styled from "styled-components";

const AllCommentWrapper = styled.article`
  .allcomment-body {
    font-family: "Arial", sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .allcomment-container {
    max-width: 100%;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
  }
  .allcomment {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    align-items: flex-start;
  }
  .allcomment-content {
    flex: 1;
  }
  .allcomment-author {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  .allcomment-text {
    font-size: 16px;
    color: #555;
  }
  .allcommenth2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default AllCommentWrapper;
