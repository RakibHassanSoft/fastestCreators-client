import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { postPublicData } from "../../BcckendConnection/postData";
import OurProcess from "../OurProcess/OurProcess";

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
    <div>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-0 w-full lg:w-[60%] mt-16 lg:mt-32 mb-12 lg:mb-32 ">
        {/* Form Section */}
        <div className="p-4 border   bg-white   green-400  ">
          <h2 className="text-4xl font-bold p-4 text-gray-500 mb-6 text-center font-serif">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700"
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
                  className="block text-md font-medium text-gray-700"
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

            {/* Country Input Section */}
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="lg:w-1/3">
                <label
                  htmlFor="country"
                  className="block text-md font-medium text-gray-700"
                >
                  Country
                </label>
                <Select
                  options={countries}
                  onChange={handleCountryChange}
                  className="text-sm mt-2"
                  placeholder="Select"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Contract Number */}
              <div className="lg:w-2/3">
                <label
                  htmlFor="contractNumber"
                  className="block text-md font-medium text-gray-700"
                >
                  Contract Number
                </label>
                <input
                  type="text"
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
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-gray-700"
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
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="px-2 py-2 bg-green-900 text-white font-semibold  shadow-md hover:bg-white  hover:text-green-900 rounded-md transform transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center  bg-green-950 p-4 pt-0  ">
          <div>
            {/* Section Title */}
            <h2 className="text-4xl font-bold p-2  text-white mb-6 text-center font-serif ">
              Get In Touch
            </h2>
            <p className="text-white mb-6">
              Fastest Creators is a leading digital service provider
              specializing in video editing, web development, app development,
              video animation, and logo design. With a passion for creativity
              and innovation, we deliver high-quality, customized solutions to
              bring your vision to life.
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
                  <p className="text-white">Badda,Link Road,Dhaka-1212</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center">
                <span className="bg-white p-3 rounded-full mr-4">
                  <i className="fc-icon fc-envelope text-green-700 text-xl"></i>
                </span>
                <div>
                  <h3 className="font-semibold text-white">Email Address</h3>
                  <p className="text-white">fastestcreators@yourmail.com</p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center">
                <span className="bg-white p-3 rounded-full mr-4">
                  <i className="fc-icon fc-phone-alt text-green-700 text-xl"></i>
                </span>
                <div>
                  <h3 className="font-semibold text-white">Phone Numbers</h3>
                  <p className="text-white">+880179159595</p>
                  <p className="text-white">+8801997360403</p>

                  {/* Add your second number here */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
