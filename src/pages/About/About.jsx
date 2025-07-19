import { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import { FaCheckCircle, FaCalendarCheck, FaCogs } from "react-icons/fa";
import OurProcess from "../../components/OurProcess/OurProcess";
import Header from "../../components/Header/Header";

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
      description:
        "We start by understanding your goals and needs, creating a clear roadmap for your project.",
      icon: <FaCalendarCheck className="text-green-900 text-4xl" />,
    },
    {
      title: "Execution",
      description:
        "Our team brings your vision to life with precision, focusing on quality at every step.",
      icon: <FaCogs className="text-green-900 text-4xl" />,
    },
    {
      title: "Delivery",
      description:
        "We deliver your project on time with top quality and ongoing support to ensure success.",
      icon: <FaCheckCircle className="text-green-900 text-4xl" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <Header
            title="About Us"
            description="Your trusted partner for innovative digital solutions"
          />

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We are a cutting-edge digital solutions company dedicated to
            delivering innovative and tailored services including web
            development, app development, branding, and video editing that
            empower your business to thrive in the digital era.
          </p>
          <Link to="/contact">
            <button className="bg-green-900 hover:bg-green-800 transition duration-300 text-white font-semibold rounded-full px-8 py-3 shadow-lg">
              Get in Touch
            </button>
          </Link>
        </section>

        {/* Services Section */}
        <section className="rounded-3xl p-10 mb-24 border border-green-900/30">
          <Header
            title="Our Services"
            description="Explore our wide range of services designed to meet your needs."
          />
          <div className="grid md:grid-cols-2 gap-14 max-w-5xl mx-auto text-gray-700">
            {[
              {
                title: "Web Development",
                desc: `Responsive, secure websites using React, Next.js, Vue.js, Node.js, Express, and MongoDB. Custom e-commerce with payment integration.`,
              },
              {
                title: "App Development",
                desc: `High-performance iOS & Android apps using React Native and Flutter optimized for security and user experience.`,
              },
              {
                title: "Logo Design",
                desc: `Unique, memorable logos that align perfectly with your brand identity for versatile usage.`,
              },
              {
                title: "Logo Animation",
                desc: `Dynamic 2D & 3D animated logos for website headers, social media, and promotional videos.`,
              },
              {
                title: "Video Editing (VFX)",
                desc: `Professional video editing and VFX for promotional content, social media, and films.`,
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-2xl font-semibold mb-3 text-green-900">
                  {title}
                </h3>
                <p className="leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto mb-2 px-2">
          <Header
            title="Meet Our Team"
            description="A dedicated team of professionals committed to your success"
          />

          <div className="grid md:grid-cols-2 gap-16">
            {members.map(({ id, name, role, description, image }) => (
              <article
                key={id}
                className="bg-green-950 text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg border border-green-100 transition-all duration-500 ease-in-out group hover:bg-black hover:text-white hover:shadow-2xl"
                data-sal="fade-up"
                data-sal-duration="700"
              >
                {/* Image container with gradient ring and shadow */}
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-[6px] border-green-700 shadow-md transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-800/60 via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold  group-hover:text-white mb-1 leading-tight tracking-tight transition-colors duration-300">
                  {name}
                </h3>

                {/* Role */}
                <p className="text-green-600 group-hover:text-green-300 font-medium mb-4 uppercase tracking-wide text-sm transition-colors duration-300">
                  {role}
                </p>

                {/* Description */}
                <p className="text-gray-50 group-hover:text-gray-200 text-sm leading-relaxed max-w-sm transition-colors duration-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <OurProcess />
      </div>
    </div>
  );
};

export default About;
