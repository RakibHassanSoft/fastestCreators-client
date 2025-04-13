import React from "react";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const data  =[
  { title: "1. Information We Collect", content: "We may collect your name, contact information, demographic details, and other relevant information for surveys or offers. Our platform ensures that the data collected is only used for legitimate purposes. The personal data you provide is stored securely and will never be shared without consent. Understanding what information we collect and why is crucial to maintaining trust and transparency between us and our users." },
  { title: "2. How We Use Your Information", content: "We use the collected data for record-keeping, service improvements, promotional emails, and market research. Your data helps us personalize and enhance your experience by offering tailored solutions and recommendations. Additionally, we analyze trends and user behavior to improve our platform, ensuring that we meet your needs efficiently and responsibly." },
  { title: "3. Security Measures", content: "We implement strict security protocols to protect your personal data from unauthorized access or disclosure. Encryption, secure servers, and compliance with data protection laws are at the core of our security measures. Your privacy is our top priority, and we continually update our protocols to counter evolving threats." },
  { title: "4. Cookies Usage", content: "Cookies help us analyze web traffic and customize user experience. You can choose to accept or decline cookies. While cookies enhance navigation and personalization, we respect your right to disable them. However, declining cookies may limit access to certain features, affecting your overall experience." },
  { title: "5. Third-Party Links", content: "Our website may contain links to external sites. We are not responsible for their privacy practices. These third-party sites operate independently and may collect data differently from us. We encourage users to read their privacy policies before engaging with their services to ensure personal information remains protected." },
  { title: "6. Controlling Your Personal Information", content: "You can opt out of marketing communications and request details of the data we hold about you at any time. We empower users by offering data management options, including deletion requests and modification rights. Your control over your personal information ensures that your privacy preferences are respected and upheld." },
  { title: "7. Money-Back Guarantee", content: "We provide a 'money-back guarantee' within 7 days if you're not satisfied with our services. Refund requests must be made within this period. This policy ensures customer satisfaction and reinforces our commitment to delivering high-quality services. Your trust in us is invaluable, and we stand by our promise to provide exceptional results.", highlight: true },
  { title: "8. Updates to Privacy Policy", content: "We may update our privacy policy periodically. Continued use of our website implies acceptance of the changes. We notify users of significant updates and encourage regular review of this section. Staying informed about changes ensures you remain aware of your rights and our commitments regarding data protection." },
  { title: "9. Contact Us", content: "For privacy concerns, contact us at support@fastestcreators.com. Your feedback is crucial in helping us improve our policies and services. Whether you have questions, require clarifications, or wish to exercise your privacy rights, we are here to assist you with transparency and efficiency." }
]
const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8 bg-white shadow-lg rounded-lg mt-44">
      
      <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif max-w-5xl md:w-1/2 lg:w-1/2 mx-auto">
      Privacy Policy
      </h2>
      
      <p className="mb-6 text-base md:text-lg text-gray-700">This privacy policy sets out how Fastest Creators uses and protects any information that you give us when using this website.</p>
      
      {data?.map((item, index) => (
        <div key={index} className="border-l-4 border-green-600 pl-4 mb-6 p-4 transition duration-300 ease-in-out hover:bg-green-100 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-green-600">{item.title}</h2>
          <p className={`text-gray-700 text-sm md:text-base ${item.highlight ? 'bg-yellow-300 text-black p-2 rounded' : ''}`}>{item.content}</p>
        </div>
      ))}
      
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex justify-center items-center gap-2"
      >
        <FaBackward /> Back
      </button>
      
      <p className="text-gray-500 text-center mt-8 text-sm md:text-base">Last updated: February 2025</p>
    </div>
  );
};

export default PrivacyPolicy;