import React from 'react';
import CommentSection from './CommentSection';

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-6 mt-44">
      {/* Header Image and Title */}
      <img src="https://th.bing.com/th/id/R.260df90d353cc44162f816d46aa97d09?rik=fdQwbDGcUFeqAw&pid=ImgRaw&r=0" alt="Header Image" />
      <h1 className="text-3xl font-bold mt-6">Plan Your Project with Your Software</h1>
      <div className="text-gray-500 text-sm mt-2">November 25, 2025 | Tom Black | Comments</div>

      {/* Main Content */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        A well-organized plan ensures success when managing your software project. Regardless of its scale, an efficient plan saves time and minimizes errors. Start by outlining your project's key objectives, stakeholders, and resources. Use professional project management tools to track your progress and maintain accountability.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-600 italic my-6">
        "I cannot give you the formula for success, but I can give you the formula for failure: It is to try to please everybody." <br /> - HERBERT BAYARD SWOPE
      </blockquote>

      <p className="text-gray-700 leading-relaxed">
        Ensure that everyone on your team is aware of their roles and responsibilities. With clear communication, your project can achieve its objectives efficiently and effectively. Make use of modern project management software to streamline your workflow and foster collaboration among your team members.
      </p>

      {/* Subsection with Images */}
      <h2 className="text-2xl font-semibold mt-8">Missing On A Pre-Launch Campaign</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        A solid pre-launch campaign is critical to the success of any software project. It builds your marketing foundation and ensures visibility for your product. Use channels like social media, email campaigns, and influencers to create awareness. Engage with your target audience and provide them with valuable insights into your product's benefits.
      </p>

      <div className="mt-6">
        <img src="https://th.bing.com/th/id/R.260df90d353cc44162f816d46aa97d09?rik=fdQwbDGcUFeqAw&pid=ImgRaw&r=0" alt="Image 1" className="w-full h-auto rounded" />
      </div>

      {/* Social Sharing Links */}
      <div className="flex items-center space-x-4 mt-8">
        <a href="#" className="text-blue-500 hover:underline">Facebook</a>
        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
        <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
        <a href="#" className="text-blue-500 hover:underline">Pinterest</a>
      </div>

      {/* Author Info */}
      <div className="flex items-center mt-8 border-t pt-6">
        <img src="https://via.placeholder.com/100" alt="Author Image" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">Tom Black</h3>
          <p className="text-gray-500 text-sm">Graduate from the University of New York in Chicago and writer for software and technology strategy.</p>
        </div>
      </div>

      {/* Include CommentSection */}
      <CommentSection />
    </div>
  );
};

export default Blog;
