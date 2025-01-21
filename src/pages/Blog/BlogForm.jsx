import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    HeadTitle: '',
    headContent: '',
    headImage: null,
    Highlight: '',
    date: '',
    category: '',
    tags: [],
    contents: [{ title: '', content: '', image: null }],
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, field) => {
    const { files } = e.target;
    if (files && files[0]) {
      const updatedFormData = { ...formData };
      updatedFormData[field] = files[0];
      setFormData(updatedFormData);
    }
  };

  const handleTagChange = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTags = [...formData.tags, e.target.value.trim()];
      setFormData({ ...formData, tags: newTags });
      e.target.value = ''; // Clear input field after adding tag
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = formData.tags.filter(tag => tag !== tagToRemove);
    setFormData({ ...formData, tags: updatedTags });
  };

  const handleContentChange = (index, e) => {
    const updatedContents = [...formData.contents];
    updatedContents[index][e.target.name] = e.target.value;
    setFormData({ ...formData, contents: updatedContents });
  };

  const addContentField = () => {
    setFormData({
      ...formData,
      contents: [...formData.contents, { title: '', content: '', image: null }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log all the data on form submission
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
    setShowCalendar(false); // Hide the calendar after selecting a date
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6 mt-44">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 border border-green-300">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Create New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Title, Image, Blog Details */}
            <div>
              <div className="mb-6">
                <label htmlFor="HeadTitle" className="block text-xl font-medium text-green-800">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="HeadTitle"
                  name="HeadTitle"
                  value={formData.HeadTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="headContent" className="block text-xl font-medium text-green-800">
                  Blog Introduction
                </label>
                <textarea
                  id="headContent"
                  name="headContent"
                  value={formData.headContent}
                  onChange={handleInputChange}
                  rows="6"
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="headImage" className="block text-xl font-medium text-green-800">
                  Header Image
                </label>
                <input
                  type="file"
                  id="headImage"
                  name="headImage"
                  onChange={(e) => handleFileChange(e, 'headImage')}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  required
                />
              </div>
            </div>

            {/* Right Section: Date, Tags, Category */}
            <div>
              <div className="mb-6">
                <label htmlFor="Highlight" className="block text-xl font-medium text-green-800">
                  Highlight
                </label>
                <input
                  type="text"
                  id="Highlight"
                  name="Highlight"
                  value={formData.Highlight}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block text-xl font-medium text-green-800">
                  Publish Date
                </label>
                <div className="relative ">
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={formData.date ? formData.date.toLocaleDateString() : ''}
                    onClick={() => setShowCalendar(!showCalendar)}
                    readOnly
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                    required
                  />
                  {showCalendar && (
                    <div className="absolute top-full mt-2 z-5">
                      <Calendar
                        onChange={handleDateChange}
                        value={formData.date || new Date()}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Category Field */}
              <div className="mb-6">
                <label htmlFor="category" className="block text-xl font-medium text-green-800">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="web_development">Web Development</option>
                  <option value="logo_design">Logo Design</option>
                  <option value="app_development">App Development</option>
                  <option value="video_editing">Video Editing</option>
                  <option value="logo_animation">Logo Animation</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="tags" className="block text-xl font-medium text-green-800">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  onKeyDown={handleTagChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  placeholder="Press Enter to add tags"
                />
                <div className="mt-2 flex flex-wrap space-x-2">
                  {formData.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-green-500 hover:text-green-700"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content Section */}
          <div>
            <h3 className="text-xl font-medium text-green-800">Blog Content</h3>
            {formData.contents.map((content, index) => (
              <div key={index} className="mt-6 space-y-6">
                <div>
                  <label htmlFor={`content-title-${index}`} className="block text-lg font-medium text-green-800">
                    Title
                  </label>
                  <input
                    type="text"
                    id={`content-title-${index}`}
                    name="title"
                    value={content.title}
                    onChange={(e) => handleContentChange(index, e)}
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label htmlFor={`content-text-${index}`} className="block text-lg font-medium text-green-800">
                    Content
                  </label>
                  <textarea
                    id={`content-text-${index}`}
                    name="content"
                    value={content.content}
                    onChange={(e) => handleContentChange(index, e)}
                    rows="6"
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor={`content-image-${index}`} className="block text-lg font-medium text-green-800">
                    Content Image
                  </label>
                  <input
                    type="file"
                    id={`content-image-${index}`}
                    name="image"
                    onChange={(e) => handleContentChange(index, e)}
                    className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-lg py-3 px-4"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addContentField}
              className="text-green-600 hover:text-green-800"
            >
              Add New Content
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
