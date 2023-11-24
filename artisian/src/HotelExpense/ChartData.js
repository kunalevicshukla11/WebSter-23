import React from "react";
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line, Bar, Doughnut, Radar, Pie } from "react-chartjs-2";
import ChartDataWrapper from "../StyledComponents/ChartDataWrapper";
import moment from "moment";

const ChartData = ({ data, time }) => {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  const expIn = data.map((val) => ({
    cat: val.category,
    type: val.transactionType,
    amm: val.amount,
  }));
  const lineData = data.map((val) => ({
    amm: val?.amount,
    type: val?.transactionType,
    month: new Date(moment(val?.date).format("MM-DD-YYYY")).getMonth() + 1,
    year: new Date(moment(val?.date).format("MM-DD-YYYY")).getFullYear(),
    day: new Date(moment(val?.date).format("MM-DD-YYYY")).getDay() + 1,
  }));
  let lineResult = [];

  const currentYear = new Date().getFullYear();
  const Result = lineData.reduce((acc, entry) => {
    const { type, year, amm, month } = entry;
    if (year <= currentYear) {
      const existingEntry = acc.find(
        (e) => e.month === month && e.type === type
      );
      if (existingEntry) {
        existingEntry.amm += amm;
      } else {
        acc.push({ month, type, amm });
      }

      return acc;
    }
  }, []);
  lineResult = Result;

  const result = expIn.reduce((acc, entry) => {
    const { cat, type, amm } = entry;
    const existingEntry = acc.find((e) => e.cat === cat && e.type === type);

    if (existingEntry) {
      existingEntry.amm += amm;
    } else {
      acc.push({ cat, type, amm });
    }

    return acc;
  }, []);

  const expenseArray = result.filter((entry) => entry.type === "Expense");

  const incomeArray = result.filter((entry) => entry.type === "Income");

  const lineResultExp = lineResult.filter((entry) => entry.type === "Expense");

  const lineResultInc = lineResult.filter((entry) => entry.type === "Income");

  // console.log(lineResultExp);
  // console.log(lineResultInc);
  // console.log(lineData);
  // console.log(expenseArray);
  // console.log(lineResult);
  // console.log(time);
  return (
    <>
      <ChartDataWrapper>
        <div className="chartBody">
          <div className="container">
            <div className="first-div">
              <Line
                data={{
                  labels: lineResult?.map((val) => val?.month),
                  datasets: [
                    {
                      label: "Expense",
                      data: lineResultExp.map((val) => val?.amm),
                    },
                    {
                      label: "Income",
                      data: lineResultInc.map((val) => val?.amm),
                    },
                  ],
                }}
              />
            </div>

            <div className="second-div">
              <div className="sub-div">
                <Bar
                  data={{
                    labels: incomeArray.map((val) => val?.cat),
                    datasets: [
                      {
                        label: "Income",
                        data: incomeArray.map((val) => val?.amm),
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                          "rgba(255, 205, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(201, 203, 207, 0.2)",
                        ],
                        borderColor: [
                          "rgb(255, 99, 132)",
                          "rgb(255, 159, 64)",
                          "rgb(255, 205, 86)",
                          "rgb(75, 192, 192)",
                          "rgb(54, 162, 235)",
                          "rgb(153, 102, 255)",
                          "rgb(201, 203, 207)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>

              <div className="sub-div">
                <Pie
                  data={{
                    labels: expenseArray.map((val) => val?.cat),
                    datasets: [
                      {
                        label: "Expense",
                        data: expenseArray.map((val) => val?.amm),
                        hoverOffset: 4,
                        backgroundColor: [
                          "rgb(147, 21, 237)",
                          "rgb(245, 225, 95)",
                          "rgb(255, 99, 132)",
                          "rgb(54, 162, 235)",
                          "rgb(255, 205, 86)",
                          "rgb(219, 7, 24)",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ChartDataWrapper>
    </>
  );
};

export default ChartData;
