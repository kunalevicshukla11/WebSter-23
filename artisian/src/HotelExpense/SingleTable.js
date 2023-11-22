import React from "react";
import SingleTableWrapper from "../StyledComponents/SingleTableWrapper";
import moment from "moment";

const SingleTable = ({ data }) => {
  if (data.length === 0) {
    return <h1>No Data Available</h1>;
  }
  return (
    <SingleTableWrapper>
      <div className="tableBody">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Title</th>
              <th>Amount</th>
              <th>TransactionType</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr>
                <td>{moment(val?.date).format("DD-MM-YYYY")}</td>
                <td>{val?.category}</td>
                <td>{val?.title}</td>
                <td>{val?.amount}</td>
                <td>{val?.transactionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SingleTableWrapper>
  );
};

export default SingleTable;
