import { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js"; // Import sal.js
import { FaPencilAlt, FaCog, FaCheckCircle } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    sal(); // Initialize sal.js when the component mounts
  }, []);

  // Dummy data for members
  const members = [
    {
      id: 2,
      name: "Rifat Sajid Khan",
      role: "CEO & Co-Founder",
      description:
        "Passionate about crafting user-centric solutions and driving the company towards new heights.",
      image:
        "https://th.bing.com/th/id/OIP.tYLyE2JaQxPBh4G99AhCHQHaJ4?rs=1&pid=ImgDetMain",
      rating: 4,
    },
    {
      id: 1,
      name: "MD Rakibul Islam",
      role: "COO & Co-Founder",
      description:
        "A dedicated leader with a passion for bringing innovative ideas to life and a focus on organizational success.",
      image:
        "https://th.bing.com/th/id/OIP.tYLyE2JaQxPBh4G99AhCHQHaJ4?rs=1&pid=ImgDetMain",
      rating: 5,
    },
    {
      id: 3,
      name: "John Doe",
      role: "Lead Developer",
      description:
        "Experienced developer focused on delivering efficient and scalable code for large applications.",
      image:
        "https://th.bing.com/th/id/OIP.tYLyE2JaQxPBh4G99AhCHQHaJ4?rs=1&pid=ImgDetMain",
      rating: 4,
    },
  ];
  const processSteps = [
    {
      title: "Planning",
      description:
        "We start by understanding your goals and needs, creating a roadmap for your project.",
      icon: <FaPencilAlt className="text-2xl" />,
      alignment: "self-start", // left-aligned for odd index
    },
    {
      title: "Execution",
      description:
        "Our team works hard to bring your vision to life, with attention to detail at every stage.",
      icon: <FaCog className="text-2xl" />,
      alignment: "self-end", // right-aligned for even index
    },
    {
      title: "Delivery",
      description:
        "We ensure that your project is delivered on time with high-quality results and precision.",
      icon: <FaCheckCircle className="text-2xl" />,
      alignment: "self-start", // left-aligned for odd index
    },
  ];

  return (
    <div className=" text-gray-800 mt-44  ">
      {/* Hero Section */}
      <section className="flex flex-col items-center py-16 bg-green-500 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          About Us
        </h1>
        <p className="text-xl text-center max-w-2xl mb-8">
          We specialize in Video Editing (VFX) and Web Development. Our goal is
          to deliver stunning visual effects and robust, interactive web
          applications tailored to your needs.
        </p>
        <Link to={"/contract"}>
          <button className="px-8 py-3 bg-white text-green-500 rounded-full font-semibold shadow-lg hover:bg-green-100 transition duration-300">
            Get in Touch
          </button>
        </Link>
      </section>

      {/* Our Members Section */}
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif w-1/3 m-auto">
            Our Members
          </h2>
          <div className="flex flex-col gap-16 relative w-8/12 m-auto">
            {/* Loop through the members and create cards */}
            {members.map((member, index) => (
              <div
                key={member.id}
                className={`relative max-w-lg bg-green-600 text-white rounded-lg shadow-lg p-8 flex space-x-6 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
                data-sal="fade"
                data-sal-duration="800"
                data-sal-easing="ease-out"
              >
                {/* Connecting Line */}
                {index % 2 === 0 && index < members.length - 1 && (
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "right-0 top-1/2" : "left-0 top-1/2"
                    } w-[2px] h-32 bg-green-500`}
                  />
                )}

                {/* Image Section */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-md object-cover"
                />
                {/* Content Section */}
                <div>
                  {/* Name and Role */}
                  <h2 className="text-2xl font-bold">{member.name}</h2>
                  <p className="text-lg text-green-300">{member.role}</p>

                  {/* Stars */}
                  <div className="flex items-center justify-center space-x-1 my-4">
                    {[...Array(member.rating)].map((_, index) => (
                      <span key={index} className="text-green-400">
                        &#9733;
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Quote Icon */}
                <div className="absolute -bottom-6 left-10 bg-green-500 text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg">
                  <span className="text-7xl text-center">"</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif w-1/3 m-auto">
            Our Process
          </h2>

          <p className="text-lg text-gray-700 mb-12">
            Our approach to video editing and web development is methodical,
            creative, and tailored to meet your specific needs. We ensure
            quality and deliver your project on time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-green-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
                data-sal="zoom-in"
                data-sal-duration="800"
                data-sal-easing="ease-out"
              >
                {/* Icon */}
                <div
                  className="mb-4 p-4 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto"
                  data-sal="fade"
                  data-sal-duration="1000"
                  data-sal-easing="ease-out"
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
