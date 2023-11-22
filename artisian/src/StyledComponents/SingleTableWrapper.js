import styled from "styled-components";

const SingleTableWrapper = styled.section`
  .tableBody {
    font-family: "Arial", sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #4caf50;
    color: white;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Alternate row coloring */
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  @media screen and (max-width: 600px) {
    table {
      border-radius: 0;
      box-shadow: none;
    }

    th,
    td {
      padding: 8px;
    }
  }
`;

export default SingleTableWrapper;
