const TermsConditions = () => {
    return (
        <div className="max-w-7xl mt-44 mx-auto p-8 bg-white shadow-lg rounded-lg ">
            <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif max-w-5xl md:w-1/2 lg:w-1/2 mx-auto">
            Terms & Conditions
        </h2>
           
            
            <p className="mb-6 text-lg text-gray-700">Welcome to Fastest Creators! These terms and conditions outline the rules and regulations for using our services. By accessing and using our services, you agree to comply with the following terms.</p>
            
            {[
                { title: "1. Acceptance of Terms", content: "By using our services, you acknowledge that you have read, understood, and agree to abide by these Terms & Conditions." },
                { title: "2. Services Offered", content: "We provide high-quality web development, app development, video editing, logo editing, and logo animation services. All services are tailored to meet the specific needs of our clients." },
                { title: "3. Payment & Refund Policy", content: "Payments must be made in advance for all services. We provide a \"money-back guarantee\" if we fail to satisfy the customer. Refund requests must be made within 7 days of service delivery.", highlight: true },
                { title: "4. Intellectual Property", content: "All content, designs, and work created by Fastest Creators remain our intellectual property unless otherwise agreed upon in writing." },
                { title: "5. User Responsibilities", content: "Users must provide accurate and complete information when requesting services. Any misuse or violation of these terms may result in termination of services without a refund." },
                { title: "6. Limitation of Liability", content: "Fastest Creators is not responsible for any indirect, incidental, or consequential damages resulting from the use of our services. Clients must ensure proper use of delivered services." },
                { title: "7. Privacy Policy", content: "We respect your privacy and ensure that all personal data is handled securely. Your information will never be shared with third parties without consent." },
                { title: "8. Termination of Services", content: "We reserve the right to terminate services if a client violates any of our terms or engages in unethical practices." },
                { title: "9. Modifications", content: "We may update these terms at any time. Continued use of our services implies acceptance of the updated terms." },
                { title: "10. Contact Us", content: "If you have any questions about our Terms & Conditions, please contact us at support@fastestcreators.com." }
            ].map((item, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-4 mb-6 p-4 transition duration-300 ease-in-out hover:bg-green-100 rounded-lg">
                    <h2 className="text-2xl font-semibold text-green-600">{item.title}</h2>
                    <p className={`text-gray-700 ${item.highlight ? 'bg-yellow-300 text-black p-2 rounded' : ''}`}>{item.content}</p>
                </div>
            ))}
            
            <p className="text-gray-500 text-center mt-8">Last updated: February 2025</p>
        </div>
    );
};

export default TermsConditions;
