import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GenreChart() { // Used to Fill in the data for the chart
  const data = {
    labels: ['Rock', 'Indie', 'Pop', 'Electronic', 'Hip Hop', 'Jazz', 'Classical'],
    datasets: [
      {
        data: [43, 27, 15, 9, 4, 2, 1], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(159, 159, 159, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This will make the chart horizontal
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false, // Explicitly disable the legend
          },
      title: {
        display: true,
        text: 'Percentage of Listening Activity By Genre',
      },
    },
    scales: { //This is new to turn off gridlines
      x: { // Assuming the x-axis is the vertical one due to indexAxis set to 'y'
        grid: {
          display: false, // Turn off grid lines for x-axis
        }
      },
      y: { // And y-axis is the horizontal one
        grid: {
          display: false, // Turn off grid lines for y-axis
        }
      },
    }
  };

  return (<Bar data={data} options={options} />);
}
