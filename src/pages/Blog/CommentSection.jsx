import React from 'react';
import { useForm } from 'react-hook-form';

const CommentSection = () => {
  // Set default values for name and email
  const defaultName = "John Doe";
  const defaultEmail = "johndoe@example.com";

  // Initialize useForm hook
  const { register, handleSubmit ,reset} = useForm({
    defaultValues: {
      name: defaultName,
      email: defaultEmail,
      comment: '', // You can keep the comment field empty initially
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);

    reset();
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Write your comment..."
          {...register('comment')} // Register the textarea
        ></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            className="border-2 border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            {...register('name')} // Register the name field
            defaultValue={defaultName} // Default value for Name
            disabled
          />
          <input
            type="email"
            className="border-2 border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            {...register('email')} // Register the email field
            defaultValue={defaultEmail} // Default value for Email
            disabled
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
