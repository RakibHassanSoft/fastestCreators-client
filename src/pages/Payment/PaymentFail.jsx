import React from "react";
import { XCircle } from "lucide-react";

const PaymentFail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <XCircle className="text-red-600 mx-auto mb-4" size={72} />
        <h1 className="text-4xl font-bold text-red-700 mb-2">Payment Failed</h1>
        <p className="text-gray-700 mb-4">
          Sorry, your payment couldn't be processed. Please try again or contact our support team at <span className="text-green-700 font-semibold">Fastest Creators</span>.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          We provide web & app development, video editing, logo design, and more. Let’s get you back on track.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Try Again
        </a>
      </div>
    </div>
  );
};

export default PaymentFail;
