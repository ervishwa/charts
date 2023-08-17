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

export function BarGraph({ heading,color }) {
  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "React",

        data: [32, 42, 51, 60, 51, 95],
        backgroundColor: "rgb(86,179,94)",
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "Angular",
        data: [37, 42, 41, 37, 31, 44],
        backgroundColor: "rgb(48,96,57)",
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "Vue",
        data: [60, 54, 54, 28, 27, 49],
        backgroundColor: "rgb(128,91,32)",
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "Vue",
        data: [20, 34, 36, 38, 48, 98],
        backgroundColor: "rgb(109,39,39)",
        borderColor: "black",
        borderWidth: 1
      },
    ],
  };

  const options={}
  return (
    <>
      <div className="bargraph" style={{marginTop:"20px"}}>
        <h1 style={{color}}>{heading}</h1>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}
