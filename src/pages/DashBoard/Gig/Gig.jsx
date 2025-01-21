// Initial
import { useEffect, useState } from "react";
import useService from "../../../hook/useService";
import { uploadImages } from "../../../BcckendConnection/postData";
import axiosPublic from "../../../BcckendConnection/axiosPublic";
import axiosSecure from "../../../BcckendConnection/axiosSecure";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Gig = () => {
   const navigate = useNavigate();
  const { data, isLoading, isError, error, refetch } = useService(); // Destructure from useService hook

  const [titlesAndIds, setTitlesAndIds] = useState([]);
  const [serviceId, setServiceId] = useState(""); // State for selected service ID
  const [serviceTitle, setServiceTitle] = useState(""); // State for selected service ID

  useEffect(() => {
    // Make sure to refetch only when component mounts or when needed
    const fetchData = async () => {
      try {
        // Refetch data
        await refetch();

        // If data is available, extract the titles and ids
        if (data && data.length > 0) {
          const extractedData = data.map((item) => ({
            _id: item._id,
            title: item.title,
          }));
          setTitlesAndIds(extractedData); // Update state with extracted data
        }
      } catch (err) {
        console.error("Error fetching data:", err); // Handle any errors
      }
    };

    // Call fetchData function
    fetchData();
  }, [data, refetch]); 
// console.log(titlesAndIds)

  const handleTitleChangesOfService = (title,id) => {
    // const selectedId = event.target.value; 
    setServiceId(id);
    setServiceTitle(title)
  };
 
  const [title, setTitle] = useState("");

  const [owner, setOwner] = useState({
    image: "",
    name: "",
    bio: "",
  });

  const [images, setImages] = useState([]);

  const [aboutDetails, setAboutDetails] = useState("");

  const [offerings, setOfferings] = useState([""]); // [""]

  const [highlightLists, setHighlightLists] = useState([
    { feature: "", detail: "" }, // Initial highlight as an array element
  ]);
  const [whyChooseUs, SetWhyyChooseUs] = useState({
    title: "",
    points: [""], // Initialize points as an array with one empty string
    details: "",
  });
  const [packages, setPackages] = useState([
    { title: "", features: [false, false, false] }, // Default package structure
  ]);

  const [pricing, setPricing] = useState({
    basic: {
      price: "",
      description: "",
      revisions: "",
      deliveryTime: "",
    },
    standard: {
      price: "",
      description: "",
      revisions: "",
      deliveryTime: "",
    },
    premium: {
      price: "",
      description: "",
      revisions: "",
      deliveryTime: "",
    },
  });

  const [fAsked, setFAsked] = useState([
    {
      question: "",
      answer: "",
    },
  ]);
  const [fData, setFData] = useState({
    title: title,
    owner: owner,
    serviceId: serviceId,
    images: images,
    aboutDetails: aboutDetails,
    offerings: offerings,
    highlights: highlightLists,
    whyChooseUs: whyChooseUs,
    packages: packages,
    pricing: pricing,

    frequently: fAsked,
  });
  // Update fData whenever any of the states change
  useEffect(() => {
    setFData((prevData) => ({
      ...prevData,
      title: title,
      owner: owner,
      serviceId: serviceId,
      images: images,
      aboutDetails: aboutDetails,
      offerings: offerings,
      highlights: highlightLists,
      whyChooseUs: whyChooseUs,
      packages: packages,
      pricing: pricing,
      frequently: fAsked,
    }));
  }, [
    title,
    owner,
    serviceId,
    images,
    aboutDetails,
    offerings,
    highlightLists,
    whyChooseUs,
    packages,
    pricing,

    fAsked,
  ]);

  // Log the updated fData to check
  useEffect(() => {
    console.log("Updated fData:", fData);
  }, [fData]);

  //  --------------------------  For tile   ----------------------
  const handleTitleChangeOfGig = (event) => {
    setTitle(event.target.value); // Update the title with the input value
  };

  //  --------------------------  For owner   ----------------------
  const handleAllDataChangeOfOwner = (e) => {
    const { name, value } = e.target; // Extract name and value from event
    setOwner((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field (title, details, or points)
    }));
  };

  //  --------------------------  For Details   ----------------------
  const handleTitleChangeOfDetails = (event) => {
    setAboutDetails(event.target.value); // Update the title with the input value
  };

  //  --------------------------  For Offering   ----------------------
  // Handler to update the offerings state when an input value changes
  const handleOfOfferingChange = (index, event) => {
    const newOfferings = [...offerings];
    newOfferings[index] = event.target.value; // Update the specific offering
    setOfferings(newOfferings); // Update state
  };

  // Handler to add a new input field for offerings
  const addOffering = () => {
    setOfferings([...offerings, ""]); // Add an empty string (new input field)
  };

  //  --------------------------  For Image   ----------------------
  // Function to add a new file input, up to a maximum of 5
  const handleAddInput = () => {
    if (images.length < 5) {
      setImages([...images, ""]); // Add a new empty input
    }
  };
  // Function to remove a specific file input by index
  const handleRemoveInput = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages); // Remove the input at the specified index
  };
  // Function to update the file at a specific index
  const handleFileChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index] = file; // Update the file in the state
    setImages(updatedImages);
  };

  //  --------------------------  For Hightlight    ----------------------
  // Function to add a new highlight field
  const handleAddHighlight = () => {
    if (highlightLists.length < 5) {
      setHighlightLists([...highlightLists, { feature: "", detail: "" }]);
    }
  };
  // Function to remove a specific highlight by index
  const handleRemoveHighlight = (index) => {
    const updatedHighlights = highlightLists.filter((_, i) => i !== index);
    setHighlightLists(updatedHighlights);
  };
  // Function to update the highlight data
  const handleHighlightChange = (index, field, value) => {
    const updatedHighlights = [...highlightLists];
    updatedHighlights[index][field] = value; // Update the specific field (feature or detail)
    setHighlightLists(updatedHighlights);
  };

  //  --------------------------  For why Choose Us   ----------------------

  const handleWhyChooseUpChange = (e, index = null) => {
    const { name, value } = e.target;

    // If handling changes for the points array
    if (name === "points" && index !== null) {
      SetWhyyChooseUs((prevState) => {
        const updatedPoints = [...prevState.points];
        updatedPoints[index] = value; // Update the specific point by index
        return { ...prevState, points: updatedPoints };
      });
    } else {
      // For other fields like title and details
      SetWhyyChooseUs((prevState) => ({
        ...prevState,
        [name]: value, // Update the specific field
      }));
    }
  };

  // Function to add a new point
  const addPoint = () => {
    SetWhyyChooseUs((prevState) => ({
      ...prevState,
      points: [...prevState.points, ""], // Add a new empty string to the points array
    }));
  };

  // Function to remove a point
  const removePoint = (index) => {
    SetWhyyChooseUs((prevState) => ({
      ...prevState,
      points: prevState.points.filter((_, i) => i !== index), // Remove the point by index
    }));
  };

  //  --------------------------  For packanges  ----------------------
  //Add a new package to the list.Ensures that the number of packages doesn't exceed 5.
  const handleAddPackage = () => {
    if (packages.length < 5) {
      setPackages([
        ...packages, // Spread existing packages
        { title: "", features: [false, false, false] }, // Add a new package
      ]);
    }
  };
  //Remove a package by its index.Filters out the package at the specified index.
  const handleRemovePackage = (index) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
  };
  // Update the title of a specific package. Updates the `title` property for the specified package.
  const handleTitleChange = (index, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index].title = value; // Update title
    setPackages(updatedPackages);
  };
  //Toggle the state of a specific feature in a package. Flips the boolean value of the feature at the specified index.
  const handleFeatureToggle = (packageIndex, featureIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].features[featureIndex] =
      !updatedPackages[packageIndex].features[featureIndex]; // Toggle feature
    setPackages(updatedPackages);
  };

  //  --------------------------  For pricing    ----------------------
  const handleInputChange = (packageType, field, value) => {
    setPricing((prevPricing) => ({
      ...prevPricing,
      [packageType]: {
        ...prevPricing[packageType],
        [field]: value, // Update the field for the specific package
      },
    }));
  };

  //----------------------------For Frequently  --------------------
  const handleFieldChange = (index, field, value) => {
    const updatedFAsked = [...fAsked]; // Copy the current state
    updatedFAsked[index][field] = value; // Update the specific field
    setFAsked(updatedFAsked); // Update the state
  };
  //Add a new empty question-answer pair to the list of FAQ.
  const handleAddQuestionAnswer = () => {
    setFAsked([
      ...fAsked,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  //******************************Handle all ************************** */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Uploaded Files:", fData);

  // };

  // Inside your component
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (e) => {
    // e.preventDefault();

    try {
      // Extract images from fData
      // const imagesToUpload = fData.images;
      // const uploadedUrls = await uploadImages(imagesToUpload);
      const fakeImages = [
        "https://warped-crescent-709634.postman.co/workspace/PH-Project~6e64f442",
        "https://warped-crescent-709634.postman.co/workspace/PH-Project~6e64f442",
      ];
      const updatedFData = {
        ...fData,
        // images: uploadedUrls, // Replace images field with the uploaded URLs
        images: fakeImages, // Replace images field with the uploaded URLs
      };
      console.log("Updated fData:", updatedFData);

      // const finalResponse = await axiosSecure.post(
      //   "gigs/sigle-gig",
      //   updatedFData
      // );
      // console.log(finalResponse);
      navigate("/services")
      reset();
    } catch (error) {
      console.error("Error uploading images or submitting data:", error);
    }
  };

  return (
    <div className="min-h-screen mt-44 bg-green-50 flex justify-center items-center py-6">
      <form
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full lg:w-1/2 p-5 border-4 m-auto"
      >
        {/* ---------------------postmortam stated   for service------------------ */}
        <h1 className="text-2xl mt-2 mb-2 text-green-500">Select service</h1>
        <div>
          {titlesAndIds.map((item) => (
            <div key={item.title} className="mb-3">
              <input
                type="radio"
                id={item.title}
                name="title"
                value={item.title} // The title is stored as the value
                onChange={()=>handleTitleChangesOfService(item.title,item._id)} // Trigger the handler on change
                className="mr-2"
              />
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          ))}
        </div>

        {/* postmortam ended   for service */}

        {/* ---------------------postmortam stated   for title------------------ */}
        <label htmlFor="title" className="text-2xl mt-2 mb-2 text-green-500">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title} // Bind the value to the state
          onChange={handleTitleChangeOfGig} // Call handler on change
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="Enter title here"
        />
        {/* postmortam ended   for title */}

        {/* ---------------------postmortam stated   for owner ------------------ */}
        <h3 className="text-2xl mt-2 mb-2 text-green-500">Owner data</h3>

        {/* Title Input Field */}
        <div className="flex flex-col">
          {/* Label for title input */}
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Image
          </label>
          {/* Input field for title */}
          <input
            type="text"
            id="image"
            name="image" // Use 'name' for easy identification in handleChange
            value={owner.image} // Bind the value of the input to the 'title' in the state
            onChange={handleAllDataChangeOfOwner} // Call handleChange on input change
            className="border border-gray-300 p-2 rounded-md" // Tailwind CSS classes for styling
            placeholder="Enter title" // Placeholder text
          />
        </div>

        {/* Points Input Field */}
        <div className="flex flex-col">
          {/* Label for points input */}
          <label htmlFor="points" className="text-sm font-medium text-gray-700">
            Name
          </label>
          {/* Input field for points */}
          <input
            type="text"
            id="name"
            name="name" // Use 'name' for easy identification in handleChange
            value={owner.name} // Bind the value of the input to 'points' in the state
            onChange={handleAllDataChangeOfOwner} // Call handleChange on input change
            className="border border-gray-300 p-2 rounded-md" // Tailwind CSS classes for styling
            placeholder="Enter points" // Placeholder text
          />
        </div>

        {/* Details Input Field */}
        <div className="flex flex-col">
          {/* Label for details input */}
          <label
            htmlFor="details"
            className="text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          {/* Textarea for details */}
          <textarea
            id="details"
            name="bio" // Use 'bio' for easy identification in handleChange
            value={owner.bio} // Bind the value of the textarea to 'details' in the state
            onChange={handleAllDataChangeOfOwner} // Call handleChange on textarea change
            className="border border-gray-300 p-2 rounded-md" // Tailwind CSS classes for styling
            placeholder="Enter details" // Placeholder text
          />
        </div>
        {/* postmortam ended   for owner */}

        {/* ---------------------postmortam stated   for Details ------------------ */}
        <label htmlFor="title" className="text-2xl mt-2 mb-2 text-green-500">
          Details
        </label>
        <textarea
          id="owner"
          value={aboutDetails} // Bind the value to the state
          onChange={handleTitleChangeOfDetails} // Call handler on change
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="Enter title here"
          rows="4" // You can adjust the number of rows for the textarea
        />
        {/* postmortam ended   for detail */}

        {/* ---------------------postmortam stated   for offering------------------ */}
        <label htmlFor="title" className="text-2xl mt-2 mb-2 text-green-500">
          Offering
        </label>
        {offerings.map((offering, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={offering}
              onChange={(e) => handleOfOfferingChange(index, e)}
              className="border border-gray-300 p-2 w-full rounded-md mt-1 mb-1"
              placeholder={`Enter offering ${index + 1}`}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addOffering}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Offering
        </button>
        {/* postmortam ended   for Offering */}

        {/* ---------------------postmortam stated   for image------------------ */}
        <h1 className="text-green-600 mb-2 mt-2">File upload here </h1>
        {images.map((_, index) => (
          <div key={index} className="flex items-center mb-4">
            {/* File Input */}
            <input
              type="file"
              accept="image/*,video/*" // Restrict to images and videos
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => handleFileChange(index, e.target.files[0])}
            />
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => handleRemoveInput(index)}
              className="ml-4 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        {/* Add File Input Button (Hidden if max inputs reached) */}
        {images.length < 5 && (
          <button
            type="button"
            onClick={handleAddInput}
            className="block w-full px-4 py-2 mb-4 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-100"
          >
            Add File Input
          </button>
        )}
        {/* postmortam ended   for image */}

        {/* -----------------postmortam started for highlisht   ---------------- */}
        {highlightLists.map((highlight, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            {/* Feature Input */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feature
              </label>
              <input
                type="text"
                placeholder="Enter feature"
                value={highlight.feature}
                onChange={(e) =>
                  handleHighlightChange(index, "feature", e.target.value)
                }
                className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* Detail Input */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detail
              </label>
              <textarea
                placeholder="Enter detail"
                value={highlight.detail}
                onChange={(e) =>
                  handleHighlightChange(index, "detail", e.target.value)
                }
                className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                rows="3"
              />
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => handleRemoveHighlight(index)}
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        {/* Add Highlight Button (Hidden if max inputs reached) */}
        {highlightLists?.length < 5 && (
          <button
            type="button"
            onClick={handleAddHighlight}
            className="block w-full px-4 py-2 mb-4 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-100"
          >
            Add Highlight
          </button>
        )}
        {/* postmortam ended for highlisht    */}

        {/* -----------------postmortam started for why choose us   ---------------- */}
        {/* Heading for the "Why Choose Us" section */}
        <h3 className="text-xl font-semibold">Why Choose Us</h3>

        {/* Title Input Field */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={whyChooseUs.title}
            onChange={handleWhyChooseUpChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter title"
          />
        </div>

        {/* Details Input Field */}
        <div className="flex flex-col">
          <label
            htmlFor="details"
            className="text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <textarea
            id="details"
            name="details"
            value={whyChooseUs.details}
            onChange={handleWhyChooseUpChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter details"
          />
        </div>

        {/* Points Input Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Points</label>
          {whyChooseUs.points.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                name="points"
                value={point}
                onChange={(e) => handleWhyChooseUpChange(e, index)}
                className="border border-gray-300 p-2 rounded-md flex-1"
                placeholder={`Enter point ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removePoint(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPoint}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            Add Point
          </button>
        </div>

        {/* -----------------postmortam started for packages   ---------------- */}
        {/* Map over the packages to dynamically render each one */}
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            {/* Package title input */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Title
              </label>
              <input
                type="text"
                placeholder="Enter package title"
                value={pkg.title}
                onChange={(e) => handleTitleChange(index, e.target.value)}
                className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* Features checkboxes */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Features
              </label>
              <div className="flex gap-2">
                {pkg.features.map((feature, featureIndex) => (
                  <label
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={feature}
                      onChange={() => handleFeatureToggle(index, featureIndex)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-800">
                      Feature {featureIndex + 1}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Remove package button */}
            <button
              type="button"
              onClick={() => handleRemovePackage(index)}
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove Package
            </button>
          </div>
        ))}
        {/* Add package button */}
        {packages.length < 5 && (
          <button
            type="button"
            onClick={handleAddPackage}
            className="block w-full px-4 py-2 mb-4 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-100"
          >
            Add Package
          </button>
        )}
        {/* postmortam ended for packages */}

        {/* ------------------postmortam stareted  for pricing----------------- */}
        <div className="mb-6 p-4 border border-gray-300 rounded-md">
          <h4 className="text-md font-medium text-gray-800 mb-4">
            Basic Package
          </h4>

          {/* Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter price"
              value={pricing.basic.price}
              onChange={(e) =>
                handleInputChange("basic", "price", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              value={pricing.basic.description}
              onChange={(e) =>
                handleInputChange("basic", "description", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Revisions Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Revisions
            </label>
            <input
              type="text"
              placeholder="Enter number of revisions"
              value={pricing.basic.revisions}
              onChange={(e) =>
                handleInputChange("basic", "revisions", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Delivery Time Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Time
            </label>
            <input
              type="text"
              placeholder="Enter delivery time"
              value={pricing.basic.deliveryTime}
              onChange={(e) =>
                handleInputChange("basic", "deliveryTime", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
        </div>
        {/* Standard Package Inputs */}
        <div className="mb-6 p-4 border border-gray-300 rounded-md">
          <h4 className="text-md font-medium text-gray-800 mb-4">
            Standard Package
          </h4>

          {/* Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter price"
              value={pricing.standard.price}
              onChange={(e) =>
                handleInputChange("standard", "price", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              value={pricing.standard.description}
              onChange={(e) =>
                handleInputChange("standard", "description", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Revisions Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Revisions
            </label>
            <input
              type="text"
              placeholder="Enter number of revisions"
              value={pricing.standard.revisions}
              onChange={(e) =>
                handleInputChange("standard", "revisions", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Delivery Time Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Time
            </label>
            <input
              type="text"
              placeholder="Enter delivery time"
              value={pricing.standard.deliveryTime}
              onChange={(e) =>
                handleInputChange("standard", "deliveryTime", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
        </div>
        {/* Premium Package Inputs */}
        <div className="mb-6 p-4 border border-gray-300 rounded-md">
          <h4 className="text-md font-medium text-gray-800 mb-4">
            Premium Package
          </h4>

          {/* Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter price"
              value={pricing.premium.price}
              onChange={(e) =>
                handleInputChange("premium", "price", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              value={pricing.premium.description}
              onChange={(e) =>
                handleInputChange("premium", "description", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Revisions Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Revisions
            </label>
            <input
              type="text"
              placeholder="Enter number of revisions"
              value={pricing.premium.revisions}
              onChange={(e) =>
                handleInputChange("premium", "revisions", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          {/* Delivery Time Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Time
            </label>
            <input
              type="text"
              placeholder="Enter delivery time"
              value={pricing.premium.deliveryTime}
              onChange={(e) =>
                handleInputChange("premium", "deliveryTime", e.target.value)
              }
              className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
        </div>
        {/* postmortam ended  for pricing */}

        {/* --------------------postmortam stareted  for frequently asked ---------- */}
        {fAsked.map((faq, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-300 rounded-md"
          >
            <h4 className="text-md font-medium text-gray-800 mb-4">
              Question #{index + 1}
            </h4>

            {/* Question Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question
              </label>
              <input
                type="text"
                placeholder="Enter question"
                value={faq.question}
                onChange={(e) =>
                  handleFieldChange(index, "question", e.target.value)
                }
                className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* Answer Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Answer
              </label>
              <input
                type="text"
                placeholder="Enter answer"
                value={faq.answer}
                onChange={(e) =>
                  handleFieldChange(index, "answer", e.target.value)
                }
                className="block w-full text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
          </div>
        ))}
        {/* Add Question-Answer Button */}
        <button
          type="button"
          onClick={handleAddQuestionAnswer}
          className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 mb-6"
        >
          Add Another Question
        </button>
        {/* postmortam ended  for asked */}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Gig;
