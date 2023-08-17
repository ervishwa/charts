import React from 'react'
import "./pieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {

    const data = {
        labels: ['Men', 'Women', 'Kids', 'Aged', 'Transgender'],
        datasets: [
          {
            label: 'percentage',
            data: [736163485,689608045,302536222,283283332,52525232],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              
            ],
            borderWidth: 1,
            
          },
        ],
      };
  return (
    <div className="piechart">
        <h1>Indian Population.</h1>
      <Pie data={data}/>
    </div>
  )
}

