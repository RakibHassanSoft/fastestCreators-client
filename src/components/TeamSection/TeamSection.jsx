import React from "react";

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

const TeamSection = () => {
  return (
    <section className="max-w-5xl mx-auto mb-32 px-6 sm:px-8">
      <p className="uppercase text-green-800 font-semibold text-center mb-3 tracking-wide">
        Our Team
      </p>
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-20 tracking-wide leading-tight">
        Our Leadership Team
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {members.map(({ id, name, role, description, image }) => (
          <article
            key={id}
            tabIndex={0}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer
    will-change-transform
    z-0 hover:z-10
  "
            style={{ transformOrigin: "center" }}
          >
            {/* Profile Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={image}
                alt={`Profile picture of ${name}`}
                className="w-full h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Description container with reserved height to prevent jump */}
            <div
              className="px-8 bg-white text-green-900 text-base font-medium border-t border-green-200 rounded-b-xl
      max-h-48 opacity-0 overflow-hidden
      group-hover:opacity-100
      transition-opacity duration-700 ease-out"
            >
              <p className="py-6">{description}</p>
            </div>

            {/* Name and Role Section */}
            <div className="flex items-center justify-between px-8 py-5 border-t border-green-200">
              <div>
                <h3 className="text-xl font-semibold text-green-900">{name}</h3>
                <p className="text-sm text-green-700 tracking-wide">{role}</p>
              </div>
              <button
                aria-label={`Contact ${name}`}
                className="bg-green-900 p-3 rounded-md text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM19.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
