import React from "react";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 mt-44">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Privacy Policy
        </h1>

        <p className="mb-4">
          This privacy policy sets out how our website uses and protects any
          information that you give us when you use this website.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Information We Collect
        </h2>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Your name and contact information</li>
          <li>Demographic information</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          How We Use the Information
        </h2>
        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other information which we think you may find interesting
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone, or
            mail. We may use the information to customize the website according
            to your interests.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-green-600">Security</h2>
        <p className="mb-4">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-green-600">Cookies</h2>
        <p className="mb-4">
          A cookie is a small file that asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added, and the
          cookie helps analyze web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual. The web application can tailor its operations to your
          needs, likes, and dislikes by gathering and remembering information
          about your preferences.
        </p>
        <p className="mb-4">
          Overall, cookies help us provide you with a better website by enabling
          us to monitor which pages you find useful and which you do not. A
          cookie in no way gives us access to your computer or any information
          about you, other than the data you choose to share with us.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Links to Other Websites
        </h2>
        <p className="mb-4">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Controlling Your Personal Information
        </h2>
        <p className="mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or emailing us at privacy@example.com
          </li>
          <li>
            We will not sell, distribute, or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </li>
          <li>
            You may request details of personal information which we hold about
            you. If you would like a copy of the information held on you, please
            write to [Your Company Name, Address, City, State, Zip Code] or
            email privacy@example.com
          </li>
          <li>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us as soon as
            possible at the above address. We will promptly correct any
            information found to be incorrect.
          </li>
        </ul>

        {/* Money-Back Guarantee Section */}
        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Our Commitment to Your Satisfaction
        </h2>
        <div className="mb-4 p-4 border-2 border-green-600 bg-green-50">
          <p className="text-lg font-bold text-green-700">
            **Money-Back Guarantee**: We are committed to ensuring that you are
            fully satisfied with your purchase. If, for any reason, you are not
            satisfied with the product or service, we offer a{" "}
            <span className="font-bold text-red-600">
              48-hour money-back guarantee
            </span>
            . Simply reach out to us within 48 hours of your purchase, and we
            will refund your payment in full.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Services We Provide
        </h2>
        <p className="mb-4">We offer a wide range of services, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Web Development</li>
          <li>Video Editing</li>
          <li>Logo Design</li>
          <li>Logo Animation</li>
          <li>And more...</li>
        </ul>

        <p className="mb-4">
          This privacy policy is subject to change without notice. Please check
          this page periodically for any updates or changes.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex justify-center items-center gap-4"
        >
        <FaBackward/> Back
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
