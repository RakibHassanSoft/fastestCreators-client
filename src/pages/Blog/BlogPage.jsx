import { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const categories = [
    "Tech",
    "Design",
    "Web Development",
    "Business",
    "Lifestyle",
  ];
  const tags = ["React", "JavaScript", "CSS", "Node.js", "Vue", "Angular"];

  const blogObjects = [
    {
      HeadTitle: "Introduction to Web Development",
      headContent:
        "In this blog, we explore the basics of web development, from HTML and CSS to JavaScript and responsive design. Whether you're a beginner or an intermediate developer, this guide will help you master the foundational skills of web development.",
      headImage:
        "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
      Highlight:
        "An overview of the essential skills every web developer needs, including HTML, CSS, JavaScript, and responsive design principles.",
      date: new Date(),
      category: "web_development",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      contents: [
        {
          title: "Getting Started with HTML",
          content:
            "HTML forms the backbone of every website. It structures content on the web, allowing us to define headings, paragraphs, images, links, and other elements   HTML forms the backbone of every website. It structures content on the web, allowing us to define headings, paragraphs, images, links, and other elements",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
      ],
      comments: [
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          content:
            "I loved the section on responsive design. It's something that often gets overlooked but is crucial in modern web development.",
        },
      ],
    },
    {
      HeadTitle: "Advanced JavaScript Concepts",
      headContent:
        "Dive deep into advanced JavaScript concepts, including closures, promises, async/await, and more. This blog will help you become proficient in JavaScript, making you a better developer.",
      headImage:
        "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
      Highlight:
        "Explore powerful JavaScript features like closures, promises, and async programming to take your skills to the next level.",
      date: new Date(),
      category: "web_development",
      tags: ["JavaScript", "Advanced Concepts", "Promises", "Async/Await"],
      contents: [
        {
          title: "Understanding Closures",
          content:
            "Closures allow functions to access variables from their outer scope, even after the function that created them has finished executing.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Working with Promises",
          content:
            "Promises in JavaScript help you manage asynchronous code. Learn how to handle asynchronous operations in a clean and readable way.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Async/Await Syntax",
          content:
            "Async/await is a modern JavaScript syntax that makes working with asynchronous code easier and more intuitive.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Error Handling in JavaScript",
          content:
            "Learn the best practices for handling errors in JavaScript, from try/catch to custom error messages and error-boundary components.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
      ],
      comments: [
        {
          name: "Bob Miller",
          email: "bob.miller@example.com",
          content:
            "The closure section was super helpful! I had a hard time understanding it before reading this blog.",
        },
      ],
    },
    {
      HeadTitle: "Mastering CSS Grid",
      headContent:
        "CSS Grid is a powerful layout system for creating complex web designs. In this blog, we explore CSS Grid's features, including grid items, fractions, and responsiveness.",
      headImage:
        "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
      Highlight:
        "Learn the fundamentals of CSS Grid and how it can simplify creating responsive, multi-column layouts.",
      date: new Date(),
      category: "web_development",
      tags: ["CSS", "CSS Grid", "Web Layout"],
      contents: [
        {
          title: "Basics of CSS Grid",
          content:
            "CSS Grid allows you to create multi-column layouts with ease. Learn how to set up a basic grid and position items inside it.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Responsive Layouts with Grid",
          content:
            "With CSS Grid, you can create layouts that adapt to different screen sizes. Learn how to use media queries to make your grids responsive.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Grid Template Areas",
          content:
            "Grid template areas allow you to create named regions in your grid layout, making it easier to manage complex designs.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Nested Grids",
          content:
            "Learn how to use grids within grids to create sophisticated layouts that are both flexible and easy to maintain.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
      ],
      comments: [
        {
          name: "Charlie Parker",
          email: "charlie.parker@example.com",
          content:
            "CSS Grid has changed the way I design layouts. This blog helped me understand its full potential.",
        },
      ],
    },
    {
      HeadTitle: "Understanding SEO for Developers",
      headContent:
        "SEO (Search Engine Optimization) is crucial for web developers to ensure that websites rank well in search engines. This blog covers the basics of SEO and best practices for developers.",
      headImage:
        "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
      Highlight:
        "Learn the essentials of SEO, including keyword research, on-page SEO, and technical SEO, to improve your website's search engine ranking.",
      date: new Date(),
      category: "web_development",
      tags: ["SEO", "Search Engine Optimization", "Web Development"],
      contents: [
        {
          title: "What is SEO?",
          content:
            "SEO involves optimizing websites to rank higher in search engine results. It includes techniques like keyword research, link building, and content optimization.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "On-Page SEO Best Practices",
          content:
            "On-page SEO involves optimizing individual web pages to rank better. Learn about optimizing titles, meta descriptions, and heading tags.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Technical SEO for Developers",
          content:
            "Technical SEO ensures that search engines can crawl and index your website effectively. This includes aspects like site speed, mobile-friendliness, and sitemaps.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
        {
          title: "Keyword Research Techniques",
          content:
            "Effective keyword research is essential for creating SEO-friendly content. Learn how to find and use the right keywords to target your audience.",
          image:
            "https://th.bing.com/th/id/R.c62fd5639e15e77e61ced1f3d75553c9?rik=BVBh1wADhqYWaA&pid=ImgRaw&r=0",
        },
      ],
      comments: [
        {
          name: "David Lee",
          email: "david.lee@example.com",
          content:
            "I had no idea how much SEO affects web development. This blog really opened my eyes to its importance.",
        },
      ],
    },
  ];

  const handleReadMoreClick = (index) => {
    if (expandedBlog === index) {
      setExpandedBlog(null);
    } else {
      setExpandedBlog(index);
    }
  };

  return (
    <div className=" text-gray-900 min-h-screen font-sans mt-44">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="md:col-span-2  ">
            {blogObjects.map((blog, index) => (
              <div
                key={index}
                className={`bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 mb-24 p-2 ${
                  expandedBlog === index ? "bg-green-100" : "hover:shadow-xl"
                }`}
              >
                {/* Blog Image */}
                <img
                  src={blog.headImage}
                  alt="Blog Image"
                  className="w-full h-full object-cover"
                />

                {/* Blog Content */}
                <div className="p-6">
                  {/* Blog Metadata */}
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <span className="flex items-center">By Stanio Lainto</span>
                    <span>📂 {blog.category}</span>
                    <span>💬 {blog.comments.length} Comments</span>
                  </div>

                  {/* Blog Title */}
                  <h2 className="text-3xl font-bold text-green-700 mb-4 hover:text-green-800 transition-colors duration-300">
                    {blog.HeadTitle}
                  </h2>

                  {/* Blog Preview Content */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {blog.headContent.substring(0, 150)}...
                  </p>

                  {/* Read More / Show Less Button */}
                  <button
                    onClick={() => handleReadMoreClick(index)}
                    className="inline-flex items-center px-6 py-3 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
                  >
                    {expandedBlog === index ? "Show Less" : "Read More +"}
                  </button>

                  {/* Expanded Blog Content */}
                  {expandedBlog === index && (
                    <div className="mt-6 bg-white p-8 rounded-xl shadow-lg ">
                      {blog.contents.map((content, contentIndex) => (
                        <div key={contentIndex} className="mb-10">
                          {/* Section Title */}
                          <h3 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-300 pb-2">
                            {content.title}
                          </h3>

                          {/* Section Content */}
                          <p className="text-gray-800 leading-relaxed tracking-wide mb-6">
                            {content.content}
                          </p>

                          {/* Optional Section Image */}
                          {content.image && (
                            <div className="relative">
                              <img
                                src={content.image}
                                alt={content.title}
                                className="w-9/12 m-auto h-full rounded-lg "
                              />
                              
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Action Button */}
                      <div className="text-center mt-8">
                        <Link to="/blog/1">
                        <button className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-md transition duration-200">
                          Explore More
                        </button></Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="sticky top-44 h-screen overflow-y-auto z-5">
            {/* Search */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Search</h3>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white text-gray-600 w-full px-4 py-2 focus:outline-none"
                />
                <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
                  🔍
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-500 mb-4">
                Categories
              </h3>
              <ul className="space-y-3 ml-4  text-gray-500">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-green-600 font-medium"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full hover:bg-green-600 hover:text-white"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
