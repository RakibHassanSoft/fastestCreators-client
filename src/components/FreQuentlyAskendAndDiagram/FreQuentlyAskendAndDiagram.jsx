import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { FaQuestionCircle } from "react-icons/fa";

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const FreQuentlyAskendAndDiagram = () => {
  // Bar chart data
  const data = {
    labels: ["Satisfied", "Dissatisfied", "Pending"],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [80, 15, 5],
        backgroundColor: ["#34D399", "#EF4444", "#F59E0B"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  // Bar chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Customer Satisfaction Breakdown",
        font: {
          size: 20,
          weight: "bold",
        },
        color: "#34D399",
      },
      legend: {
        position: "top",
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
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-600 hover:text-green-400">
          ~Frequently Asked~
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div className="space-y-6">
          {[
            {
              question: "What if I am not satisfied with the product?",
              answer:
                "If you're not satisfied with your purchase, we offer a 30-day return policy and a full refund.",
            },
            {
              question: "How can I request a refund?",
              answer:
                "Simply contact our support team, and we will process your refund within 3-5 business days.",
            },
            {
              question: "How do I track my order?",
              answer:
                "We send tracking details to your email once your order is shipped. You can track it via the link provided.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg shadow-lg hover:scale-105 transform transition"
            >
              <div className="flex items-center space-x-3">
                <FaQuestionCircle className="text-3xl text-white" />
                <h3 className="text-xl font-semibold text-white">
                  Q{index + 1}: {faq.question}
                </h3>
              </div>
              <p className="text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="flex justify-center items-center">
          <div className="w-full h-96 bg-white rounded-lg shadow-xl p-4">
            <h3 className="text-2xl font-semibold text-center text-green-600 mb-4 bg-green-100 p-2 rounded-md">
              Customer Satisfaction
            </h3>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreQuentlyAskendAndDiagram;
