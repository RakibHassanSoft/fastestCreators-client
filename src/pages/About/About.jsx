import { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import { FaPencilAlt, FaCog, FaCheckCircle, FaCalendarCheck, FaCogs } from "react-icons/fa";
import bgImg from "../../../public/img/download.jpeg";

const About = () => {
  useEffect(() => {
    sal();
  }, []);

  const members = [
    {
      id: 2,
      name: "Rifat Sajid Khan",
      role: "CEO & Co-Founder",
      description:
        "Rifat is a visionary leader committed to innovation, efficiency, and team excellence. With a deep understanding of business strategies and user-centered design, he ensures the company's growth through collaborative decision-making and continuous improvement. His leadership fosters a culture of innovation and integrity, inspiring the team to deliver impactful results and exceed expectations.",
      image:
        "https://res.cloudinary.com/dvdyfyryz/image/upload/v1745561354/427905412_1856075261519206_4098036675401975123_n_zffbyx_vbahdr.jpg",
    },
    {
      id: 1,
      name: "MD Rakibul Islam",
      role: "COO, CTO & Co-Founder",
      description:
        "Rakibul brings strong technical expertise and strategic foresight to the team. As COO & CTO, he ensures smooth operations and leads development with a focus on modern technologies and scalable solutions. His hands-on approach, dedication to innovation, and results-driven mindset help translate complex ideas into high-performing, user-friendly digital products.",
      image:
        "https://res.cloudinary.com/dvdyfyryz/image/upload/v1745561279/474126757_1742769009628063_7491725414084458000_n_nxvx0r.jpg",
    },
  ];
  const processSteps = [
    {
      title: "Planning",
      description: "We start by understanding your goals and needs, creating a roadmap for your project.",
      icon: <FaCalendarCheck className="text-3xl" />, // React Icon for Planning
    },
    {
      title: "Execution",
      description: "Our team works hard to bring your vision to life, with attention to detail at every stage.",
      icon: <FaCogs className="text-3xl" />, // React Icon for Execution
    },
    {
      title: "Delivery",
      description: "We ensure that your project is delivered on time with high-quality results and precision.",
      icon: <FaCheckCircle className="text-3xl" />, // React Icon for Delivery
    },
  ];
  

  return (
    <div className="relative text-gray-800 pt-32  ">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/10 z-0"></div>

      {/* Content Layer with Background Image */}
      <div
        className="relative z-0 bg-black bg-opacity-70"
        style={{
          backgroundOpacity: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Hero Section */}
        <section className="flex flex-col items-center px-6 text-center text-white py-20">
          <h2 className="text-5xl font-bold font-serif bg-green-500 px-6 py-2 rounded-full shadow-lg mb-6">
            About Fastest Creators
          </h2>
         
          <Link to="/contract">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300 shadow-md">
              Get in Touch
            </button>
          </Link>
        </section>

        {/* Detailed Explanation of Services */}
        <section className="max-w-6xl mx-auto px-6 py-16 bg-black bg-opacity-50 rounded-3xl ">
          <h2 className="text-4xl font-bold font-serif text-center text-white mb-12 bg-green-500 w-fit px-6 py-2 rounded-full m-auto shadow-xl">
            Our Services
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl text-white font-semibold mb-4">
                1. Web Development
              </h3>
              <p className="text-lg text-white">
                We create responsive, fast, and secure websites using modern
                technologies like React, Next.js, and Vue.js for the frontend
                and Node.js, Express, and MongoDB for the backend. Our
                e-commerce solutions are custom-tailored to integrate payment
                gateways, product catalogs, and more.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-white font-semibold mb-4">
                2. App Development
              </h3>
              <p className="text-lg text-white">
                Whether for iOS or Android, we create intuitive,
                high-performance apps using React Native, Flutter, and native
                tools. Our apps are optimized for performance and security,
                ensuring a seamless experience for users.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-white font-semibold mb-4">
                3. Logo Design
              </h3>
              <p className="text-lg text-white">
                We craft unique, memorable logos that align with your brand
                identity. Our design process focuses on creativity, simplicity,
                and versatility across different mediums.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-white font-semibold mb-4">
                4. Logo Animation
              </h3>
              <p className="text-lg text-white">
                Our team animates logos to add dynamic and professional touches
                to your brand. We create 2D and 3D animations for website
                headers, social media ads, video intros, and promotional videos.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-white font-semibold mb-4">
                5. Video Editing (VFX)
              </h3>
              <p className="text-lg text-white">
                We specialize in video editing and visual effects, creating
                compelling stories and stunning visuals for promotional videos,
                social media content, and full-length films.
              </p>
            </div>
          </div>
        </section>

        {/* Our Members Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 bg-black bg-opacity-30 rounded-3xl  mt-24 mb-24">
          <h2 className="text-4xl font-bold font-serif text-center text-white mb-12 bg-green-500 w-fit px-6 py-2 rounded-full m-auto shadow-xl">
            Our Members
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-white flex flex-col items-center text-center"
                data-sal="fade-up"
                data-sal-duration="800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-52 object-cover rounded-full border-4 border-green-400 mb-4"
                />
                <h3 className="text-3xl font-semibold">{member.name}</h3>
                <p className="text-green-300 text-xl">{member.role}</p>
                <p className="text-lg mt-4">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-800 bg-opacity-40 rounded-lg ">
          <h2 className="text-4xl font-bold font-serif text-white mb-12 bg-gradient-to-r from-green-400 to-green-600 w-fit px-6 py-2 text-center rounded-r-full shadow-xl">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                data-sal="zoom-in"
                data-sal-duration="700"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 shadow-xl">
                  {step.icon} {/* Render the appropriate React Icon here */}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center text-gray-800">
                  {step.title}
                </h4>
                <p className="text-sm text-center text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
