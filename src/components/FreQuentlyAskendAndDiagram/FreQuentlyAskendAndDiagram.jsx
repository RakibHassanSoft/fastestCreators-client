import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { FaQuestionCircle } from "react-icons/fa";
import Header from "../Header/Header";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const FreQuentlyAskendAndDiagram = () => {
  const data = {
    labels: ["Satisfied", "Dissatisfied", "Pending"],
    datasets: [
      {
        label: "Customer Feedback",
        data: [92, 3, 5],
        backgroundColor: ["#10B981", "#EF4444", "#F59E0B"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // thinner ring
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
          color: "#374151",
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
  };

  const faqs = [
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
  ];

  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
       <Header
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* FAQ Section */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <FaQuestionCircle className="text-2xl text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Q{index + 1}: {faq.question}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Doughnut Chart */}
          <div className="w-full bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Customer Satisfaction Overview
            </h3>
            <div className="w-full flex justify-center">
              <div className="w-64 h-64">
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreQuentlyAskendAndDiagram;
