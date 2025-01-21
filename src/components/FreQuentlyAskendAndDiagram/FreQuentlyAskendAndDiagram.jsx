import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { FaQuestionCircle } from 'react-icons/fa';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const FreQuentlyAskendAndDiagram = () => {
  // Bar chart data (example)
  const data = {
    labels: ['Satisfied', 'Dissatisfied', 'Pending'],
    datasets: [
      {
        label: 'Customer Satisfaction',
        data: [80, 15, 5], // Demo data (Including Pending value)
        backgroundColor: ['#34D399', '#EF4444', '#F59E0B'], // Green, Red, Orange
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Options for the Bar chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Customer Satisfaction Breakdown',
        font: {
          size: 20,
          weight: 'bold',
        },
        color: '#34D399',
      },
      legend: {
        position: 'top',
        labels: {
          fontSize: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 16,
          },
          stepSize: 10, // Control step size to show smaller increments
        },
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 p-8 h-auto max-w-[132rem] m-auto">
      {/* Left Section: Frequently Asked Questions */}
      <div className="flex-1  md:w-1/2 lg:w-1/3 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-green-600 mb-4">Frequently Asked Questions</h2>

        {/* FAQ Cards with Icons */}
        <div className="space-y-4  w-11/12  m-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-3xl text-white" />
              <h3 className="text-xl font-semibold text-white">Q1: What if I am not satisfied with the product?</h3>
            </div>
            <p className="text-white mt-2">If you're not satisfied with your purchase, we offer a 30-day return policy and a full refund.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-3xl text-white" />
              <h3 className="text-xl font-semibold text-white">Q2: How can I request a refund?</h3>
            </div>
            <p className="text-white mt-2">Simply contact our support team, and we will process your refund within 3-5 business days.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-3xl text-white" />
              <h3 className="text-xl font-semibold text-white">Q3: How do I track my order?</h3>
            </div>
            <p className="text-white mt-2">We send tracking details to your email once your order is shipped. You can track it via the link provided.</p>
          </div>
        </div>
      </div>

      {/* Right Section: Customer Satisfaction Bar Chart */}
      <div className="w-full lg:w-1/3 flex justify-center items-center">
        <div className="w-full h-96 bg-white rounded-lg shadow-xl p-4 overflow-hidden">
          <h3 className="text-2xl font-semibold text-center text-green-600 mb-4 bg-green-100 p-2 rounded-md">Customer Satisfaction</h3>
          <div className="w-full h-full">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreQuentlyAskendAndDiagram;
