import React from "react";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <CheckCircle className="text-green-600 mx-auto mb-4" size={72} />
        <h1 className="text-4xl font-bold text-green-700 mb-2">Payment Successful</h1>
        <p className="text-gray-700 mb-4">
          Thank you for trusting <span className="text-green-700 font-semibold">Fastest Creators</span>!
        </p>
        <p className="text-sm bg-yellow-100 font-semibold rounded-sm text-green-600 mb-2">
          Our team will contact you shortly to begin working on your service.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Your satisfaction is our priority. If you are not satisfied, we offer a full refund within 7 days.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
