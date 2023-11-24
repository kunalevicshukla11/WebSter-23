import styled from "styled-components";

const ChartDataWrapper = styled.article`
  .chartBody {
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
    background-color: #fff;
  }

  .container {
    height: 600px; /* Set a fixed height for the container */
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Hide any content that overflows the container */
  }

  .first-div,
  .second-div,
  .second-div .sub-div {
    flex: 1;
    background-color: #dce3de;
    color: black;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow: hidden; /* Hide any content that overflows the div */
  }

  .second-div {
    display: flex;
    justify-content: space-around; /* Adjust the layout for better spacing */
  }

  /* Responsive Styles */
  @media screen and (max-width: 600px) {
    .container {
      height: auto;
    }

    .second-div {
      flex-direction: column;
    }

    .second-div .sub-div {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export default ChartDataWrapper;
