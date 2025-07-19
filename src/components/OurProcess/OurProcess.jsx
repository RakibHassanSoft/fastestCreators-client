import { FaLightbulb, FaPencilRuler, FaCogs, FaCheckCircle, FaRocket, FaLifeRing } from "react-icons/fa";

const processSteps = [
  {
    title: "Project Planning & Discovery",
    description:
      "Client Consultation, scope definition, research & analysis, proposal & roadmap, and client approval.",
    icon: <FaLightbulb className="text-blue-600 text-4xl" />,
  },
  {
    title: "Design & Pre-Production",
    description:
      "Wireframes, mockups, storyboards, client feedback, and finalization of creative direction.",
    icon: <FaPencilRuler className="text-blue-600 text-4xl" />,
  },
  {
    title: "Execution & Production",
    description:
      "Development or video editing, regular updates, and quality checks.",
    icon: <FaCogs className="text-blue-600 text-4xl" />,
  },
  {
    title: "Testing & Review",
    description:
      "Cross-browser/device testing, bug fixes, client reviews, and revisions.",
    icon: <FaCheckCircle className="text-blue-600 text-4xl" />,
  },
  {
    title: "Delivery & Launch",
    description:
      "Final deployment or delivery, documentation, training, and client sign-off.",
    icon: <FaRocket className="text-blue-600 text-4xl" />,
  },
  {
    title: "Post-Launch Support & Maintenance",
    description:
      "Ongoing bug fixes, updates, enhancements, and performance monitoring.",
    icon: <FaLifeRing className="text-blue-600 text-4xl" />,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-white mt-12 py-20">
      <div className="w-full  px-6 text-center">
        <p className="text-sm uppercase font-semibold text-green-600 mb-2">
          Working Process
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Standard Work Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative">
          {processSteps.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto">
                  {icon}
                  <span className="absolute -top-2 -right-2 bg-blue-100 text-green-700 rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
