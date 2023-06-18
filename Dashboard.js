import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
      createChart(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const createChart = (jsonData) => {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Intensity', 'Likelihood', 'Relevance'],
        datasets: [
          {
            label: 'Data Values',
            data: [jsonData.intensity, jsonData.likelihood, jsonData.relevance],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      {data && (
        <div>
          <canvas id="chart" width="400" height="200"></canvas>
          <p>Year: {data.year}</p>
          <p>Country: {data.country}</p>
          <p>Topics: {data.topics.join(', ')}</p>
          <p>Region: {data.region}</p>
          <p>City: {data.city}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
