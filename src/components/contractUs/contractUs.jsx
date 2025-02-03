import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { postPublicData } from "../../BcckendConnection/postData";

const countries = [
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "UK", label: "UK" },
  { value: "India", label: "India" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Italy", label: "Italy" },
  { value: "Spain", label: "Spain" },
  { value: "Brazil", label: "Brazil" },
  { value: "Japan", label: "Japan" },
  { value: "China", label: "China" },
  { value: "South Korea", label: "South Korea" },
  { value: "Russia", label: "Russia" },
  { value: "Mexico", label: "Mexico" },
  { value: "Argentina", label: "Argentina" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "South Africa", label: "South Africa" },
  { value: "Egypt", label: "Egypt" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Turkey", label: "Turkey" },
  { value: "Sweden", label: "Sweden" },
  { value: "Norway", label: "Norway" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Belgium", label: "Belgium" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Greece", label: "Greece" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Israel", label: "Israel" },
  { value: "Singapore", label: "Singapore" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Thailand", label: "Thailand" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Philippines", label: "Philippines" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Kenya", label: "Kenya" },
  { value: "Chile", label: "Chile" },
  { value: "Peru", label: "Peru" },
  { value: "Colombia", label: "Colombia" },
  { value: "Chile", label: "Chile" },
];

const ContactUs = () => {
  const [country, setCountry] = useState(null);
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send the form data to the backend
      const newContract = {
        ...data,
        country: country,
      };
      const res = await postPublicData(
        "/contracts/create-contract",
        newContract
      );
      if (res.statusCode === 201) {
        Swal.fire({
          icon: "success",
          title: "Congratulaions !",
          text: "We have received your message.",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    // Using SweetAlert2 for a success message

    reset();
  };
  // Handle change for country select (to update react-hook-form)
  const handleCountryChange = (selectedOption) => {
    // console.log(selectedOption)
    setCountry(selectedOption?.value);
    setValue("country", selectedOption ? selectedOption.value : "");
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-[60%] mt-16 lg:mt-32 mb-16 lg:mb-32 ">
      {/* Form Section */}
      <div className="p-8 border rounded-lg shadow-xl bg-white border-r-4 border-r-green-400 border-b-4 border-b-green-400 h-[36rem]">
        <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-green-500 text-white mb-6 text-center font-serif">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="flex justify-between gap-3">
            <div className="lg:w-1/2">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: "Name is required" })}
                className="w-full text-sm p-2 mt-2 border text-green-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="lg:w-1/2">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full text-sm p-2 mt-2 border border-gray-300 text-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              {...register("message", { required: "Message is required" })}
              rows="4"
              className="w-full text-sm p-2 mt-2 border text-green-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          {/* Country Input Section */}
          <div className="flex  justify-between">
            <div className="lg:w-1/3">
              <label
                htmlFor="country"
                className="block text-lg font-medium text-gray-700"
              >
                Country
              </label>
              <Select
                options={countries}
                onChange={handleCountryChange}
                className="text-sm mt-2 "
                placeholder="Select"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            {/* contract  */}
            <div className="lg:w-7/12">
              <label
                htmlFor="contractNumber"
                className="block text-lg font-medium text-gray-700"
              >
                Contract Number
              </label>
              <input
                type="text" // Use text input to allow formatting flexibility
                id="contractNumber"
                name="contractNumber"
                {...register("contractNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/, // Regex for 10 digit phone number
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="w-full text-sm p-2 mt-2 text-green-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.contractNumber && (
                <p className="text-red-500 text-sm">
                  {errors.contractNumber.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-44 py-3 mt-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center rounded-lg bg-green-700 p-8 shadow-lg">
        <div>
          {/* Section Title */}
          <h2 className="text-4xl font-bold p-4 rounded-tl-full rounded-br-full shadow-lg bg-white text-green-600 mb-6 text-center font-serif">
          Get In Touch
        </h2>
          <p className="text-white mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Contact List */}
          <ul className="space-y-6">
            {/* Address */}
            <li className="flex items-center">
              <span className="bg-white p-3 rounded-full mr-4">
                <i className="fc-icon fc-map-marker-alt text-green-700 text-xl"></i>
              </span>
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="text-white">
                  Dhaka 102, utl 1216, road 45 house, Shantighar Rahuta, 1213
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center">
              <span className="bg-white p-3 rounded-full mr-4">
                <i className="fc-icon fc-envelope text-green-700 text-xl"></i>
              </span>
              <div>
                <h3 className="font-semibold text-white">Email Address</h3>
                <p className="text-white">ijmnnhasan000@yourmail.com</p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center">
              <span className="bg-white p-3 rounded-full mr-4">
                <i className="fc-icon fc-phone-alt text-green-700 text-xl"></i>
              </span>
              <div>
                <h3 className="font-semibold text-white">Phone Number</h3>
                <p className="text-white">0000-0000-00-000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
