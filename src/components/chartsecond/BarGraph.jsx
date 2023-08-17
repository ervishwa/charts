import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarGraph({ heading }) {
  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "React",

        data: [32, 42, 51, 60, 51, 95],
        backgroundColor: "red",
        borderColor: "#F44236",
      },
      {
        label: "Angular",
        data: [37, 42, 41, 37, 31, 44],
        backgroundColor: "#F44236",
        borderColor: "#F44236",
      },
      {
        label: "Vue",
        data: [60, 54, 54, 28, 27, 49],
        backgroundColor: "#FFCA29",
        borderColor: "#FFCA29",
      },
      {
        label: "Vue",
        data: [20, 34, 36, 38, 48, 98],
        backgroundColor: "black",
        borderColor: "#FFCA29",
      },
    ],
  };

  const options={}
  return (
    <>
      <div className="bargraph">
        <h1>{heading}</h1>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}
