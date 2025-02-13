import { useState } from "react";
import {
  FaVideo,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaPencilAlt,
  FaRegQuestionCircle,
  FaShopify,
  FaSearch,
  FaFilm,
  FaToolbox,
  FaDollarSign,
  FaChevronDown,
  FaChevronUp,
  FaImage,
} from "react-icons/fa";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Array of questions and answers for different categories
  const faqData = [
    {
      category: "Web Development",
      questions: [
        {
          question: "What is the full stack?",
          answer:
            "The full stack refers to both the front-end and back-end technologies used to develop a web application. This includes the front-end frameworks like React or Next.js, the back-end technologies like Node.js, Express, and Django, as well as databases like MongoDB or SQL.",
          icon: <FaCode size={30} />,
        },
        {
          question: "How long does it take to develop a full stack website?",
          answer:
            "The time required to develop a full stack website depends on the project scope. It can range from a few weeks for simpler apps to several months for more complex applications with multiple features and integrations.",
          icon: <FaCode size={30} />,
        },
        {
          question:
            "Do you provide API development for full stack applications?",
          answer:
            "Yes, we develop RESTful APIs using technologies such as Node.js, Express.js, Django, or Flask. These APIs work seamlessly with front-end technologies like React or Next.js and databases like MongoDB or SQL.",
          icon: <FaCode size={30} />,
        },
        {
          question: "Can you implement authentication in full stack apps?",
          answer:
            "Absolutely! We implement secure authentication methods such as JWT (JSON Web Tokens), OAuth, or even third-party login integrations for secure user login and management.",
          icon: <FaCode size={30} />,
        },
        {
          question: "How do you manage state in React applications?",
          answer:
            "We manage state using Redux, React's built-in state management (like useState, useContext), or the Context API to ensure smooth user experience and state synchronization across components.",
          icon: <FaCode size={30} />,
        },
        {
          question: "What is Next.js and why is it used?",
          answer:
            "Next.js is a React framework that allows for server-side rendering, static site generation, and routing. It's perfect for building high-performance, SEO-friendly web applications.",
          icon: <FaCode size={30} />,
        },
        {
          question: "How do you handle databases in full stack applications?",
          answer:
            "We work with both NoSQL (MongoDB) and relational SQL databases (PostgreSQL, MySQL) depending on the application's requirements for data modeling and scalability.",
          icon: <FaCode size={30} />,
        },
        {
          question: "What are CI/CD practices, and do you implement them?",
          answer:
            "CI/CD (Continuous Integration/Continuous Deployment) is a practice that ensures automated testing and deployment of code changes. We implement CI/CD pipelines using platforms like GitHub Actions, GitLab CI, or Jenkins to streamline the development and deployment process.",
          icon: <FaCode size={30} />,
        },
        {
          question:
            "Do you use cloud services in your web development projects?",
          answer:
            "Yes, we integrate cloud services like AWS, Google Cloud, or Azure for scalable hosting, storage, and serverless functions to enhance performance and reliability of web applications.",
          icon: <FaCode size={30} />,
        },
        {
          question:
            "How do you optimize performance in full stack applications?",
          answer:
            "We optimize performance through techniques like code splitting, lazy loading, server-side rendering (SSR), caching strategies, and using content delivery networks (CDNs) for faster load times.",
          icon: <FaCode size={30} />,
        },
        {
          question: "Do you offer Python development services?",
          answer:
            "Yes, we offer Python development services for back-end applications, APIs, and automation scripts. We work with frameworks like Django, Flask, and FastAPI for scalable web applications.",
          icon: <FaCode size={30} />,
        },
        {
          question: "What is Redux, and why should I use it?",
          answer:
            "Redux is a state management library for JavaScript applications. It helps manage the global state of a React application efficiently, especially in larger applications where multiple components need access to the same data.",
          icon: <FaCode size={30} />,
        },
        {
          question: "How do you handle real-time features in web applications?",
          answer:
            "We use technologies like WebSockets, Socket.io, or Firebase to enable real-time features in web applications, such as live notifications, messaging, and live data updates.",
          icon: <FaCode size={30} />,
        },
        {
          question: "Can you implement responsive web design?",
          answer:
            "Yes, we use responsive design techniques with frameworks like Tailwind CSS, Bootstrap, or custom media queries to ensure that web applications work seamlessly across all devices, from desktops to mobile phones.",
          icon: <FaCode size={30} />,
        },
        {
          question: "What is serverless architecture?",
          answer:
            "Serverless architecture allows you to build and run applications without managing servers. We leverage services like AWS Lambda or Google Cloud Functions to implement serverless backends for fast and cost-efficient development.",
          icon: <FaCode size={30} />,
        },
      ],
    },

    {
      category: "Video Editing",
      questions: [
        {
          question: "What is the process for video editing services?",
          answer:
            "Our video editing services include cutting, trimming, color correction, sound design, and adding VFX to create engaging videos that represent your brand.",
          icon: <FaVideo size={30} />,
        },
        {
          question: "Do you offer video editing for social media content?",
          answer:
            "Yes, we specialize in creating videos tailored for social media platforms, ensuring they are engaging and optimized for your audience.",
          icon: <FaVideo size={30} />,
        },
        {
          question: "What software do you use for video editing?",
          answer:
            "We use industry-standard software like Adobe Premiere Pro, After Effects, and Final Cut Pro for professional video editing.",
          icon: <FaVideo size={30} />,
        },
        {
          question: "Do you offer VFX and animation in video editing?",
          answer:
            "Yes, we provide VFX, animation, and special effects to enhance your videos and make them stand out.",
          icon: <FaVideo size={30} />,
        },
        {
          question: "How do I provide you with my video footage?",
          answer:
            "You can upload your video footage directly through our secure file-sharing platform, or we can provide you with a link to share your files.",
          icon: <FaVideo size={30} />,
        },
      ],
    },
    {
      category: "App Development",
      questions: [
        {
          question: "Do you provide mobile app development services?",
          answer:
            "Yes, we specialize in both Android and iOS mobile app development, creating responsive and user-friendly applications.",
          icon: <FaMobileAlt size={30} />,
        },
        {
          question:
            "What programming languages do you use for app development?",
          answer:
            "We use languages such as JavaScript (React Native), Swift (iOS), and Kotlin (Android) to build high-performance mobile apps.",
          icon: <FaMobileAlt size={30} />,
        },
        {
          question: "Can you develop cross-platform mobile apps?",
          answer:
            "Yes, we can create cross-platform apps using technologies like React Native and Flutter, ensuring they work seamlessly on both iOS and Android.",
          icon: <FaMobileAlt size={30} />,
        },
        {
          question: "What is the timeline for developing a mobile app?",
          answer:
            "App development timelines vary based on complexity, but typically it can take anywhere from 6 weeks to 6 months to build a fully functional app.",
          icon: <FaMobileAlt size={30} />,
        },
        {
          question: "Do you offer post-launch support for apps?",
          answer:
            "Yes, we provide ongoing support and maintenance for apps after they are launched to ensure they continue to perform well.",
          icon: <FaMobileAlt size={30} />,
        },
      ],
    },
    {
      category: "Logo Animation",
      questions: [
        {
          question: "What is logo animation, and why should I use it?",
          answer:
            "Logo animation is the process of making your logo come to life through motion graphics, adding a dynamic and engaging element to your brand.",
          icon: <FaFilm size={30} />,
        },
        {
          question: "How long does it take to animate my logo?",
          answer:
            "Logo animation typically takes about 1-2 weeks, depending on the complexity and number of revisions required.",
          icon: <FaFilm size={30} />,
        },
        {
          question: "Can I use the animated logo on social media?",
          answer:
            "Yes, you can use the animated logo on various platforms, including social media, websites, and marketing materials.",
          icon: <FaFilm size={30} />,
        },
        {
          question: "Do you provide different styles of logo animation?",
          answer:
            "Yes, we offer a variety of animation styles including 2D, 3D, and hand-drawn animations to suit your brand's needs.",
          icon: <FaFilm size={30} />,
        },
        {
          question: "Can you animate my existing logo?",
          answer:
            "Yes, we can animate your existing logo to give it a fresh and dynamic look that enhances your brand's identity.",
          icon: <FaFilm size={30} />,
        },
      ],
    },
    {
      category: "Logo Editing",
      questions: [
        {
          question: "Can you redesign my logo?",
          answer:
            "Yes, we can redesign your logo to make it more modern, relevant, and aligned with your brand's vision.",
          icon: <FaImage size={30} />,
        },
        {
          question: "Do you offer logo color changes?",
          answer:
            "Yes, we can update the colors of your logo to match your new branding or to give it a more contemporary look.",
          icon: <FaImage size={30} />,
        },
        {
          question: "Can you create a logo from scratch?",
          answer:
            "Yes, we offer custom logo design services, creating logos from scratch based on your business needs and brand identity.",
          icon: <FaImage size={30} />,
        },
        {
          question: "Do you offer logo vectorization services?",
          answer:
            "Yes, we can convert your raster logos into scalable vector files that can be resized without losing quality.",
          icon: <FaImage size={30} />,
        },
        {
          question:
            "Can you provide me with different file formats for my logo?",
          answer:
            "Yes, we deliver logos in multiple formats including PNG, JPG, SVG, EPS, and PDF to suit different uses.",
          icon: <FaImage size={30} />,
        },
      ],
    },
  ];

  const toggleFAQ = (index, categoryIndex) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gradient-to-r mt-11 lg:mt-32 from-green-500 to-teal-400 text-white text-center py-24">
        <h1 className=" text-3xl lg:text-6xl font-extrabold tracking-tight transform hover:scale-110 transition-all duration-300">
          Transforming Ideas into Reality
        </h1>
        <p className="mt-4  text-xl lg:text-2xl">
          Expert Video Editing & Web Development Solutions
        </p>
      </header>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Logo Animation Section */}
        <div className="space-y-10 mt-10">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
          Logo Animation
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData[3].questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between w-full py-5 text-left text-green-700 font-medium"
                  onClick={() => toggleFAQ(index, 0)}
                >
                  <div className="flex items-center m-2">
                    {item.icon}
                    <span className="ml-3 text-xl lg:text-2xl">
                      {item.question}
                    </span>
                  </div>
                  <span>
                    {openFAQ === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="text-gray-600 py-4 text-2xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Logo Editing Section */}
        <div className="space-y-10 mt-10">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
          Logo Editing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData[4].questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between w-full py-5 text-left text-green-700 font-medium"
                  onClick={() => toggleFAQ(index, 0)}
                >
                  <div className="flex items-center m-2">
                    {item.icon}
                    <span className="ml-3 text-xl lg:text-2xl">
                      {item.question}
                    </span>
                  </div>
                  <span>
                    {openFAQ === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="text-gray-600 py-4 text-2xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="space-y-10">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
            Web Development
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData[0].questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between w-full py-5 text-left text-green-700 font-medium"
                  onClick={() => toggleFAQ(index, 0)}
                >
                  <div className="flex items-center m-2">
                    {item.icon}
                    <span className="ml-3 text-xl lg:text-2xl">
                      {item.question}
                    </span>
                  </div>
                  <span>
                    {openFAQ === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="text-gray-600 py-4 text-2xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Editing Section */}
        <div className="space-y-10 mt-10">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
            Video Editing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData[1].questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between w-full py-5 text-left text-green-700 font-medium"
                  onClick={() => toggleFAQ(index, 0)}
                >
                  <div className="flex items-center m-2">
                    {item.icon}
                    <span className="ml-3 text-xl lg:text-2xl">
                      {item.question}
                    </span>
                  </div>
                  <span>
                    {openFAQ === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="text-gray-600 py-4 text-2xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App Development Section */}
        <div className="space-y-10 mt-10">
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
          App Development
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData[2].questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between w-full py-5 text-left text-green-700 font-medium"
                  onClick={() => toggleFAQ(index, 0)}
                >
                  <div className="flex items-center m-2">
                    {item.icon}
                    <span className="ml-3 text-xl lg:text-2xl">
                      {item.question}
                    </span>
                  </div>
                  <span>
                    {openFAQ === index ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="text-gray-600 py-4 text-2xl">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default FAQ;
