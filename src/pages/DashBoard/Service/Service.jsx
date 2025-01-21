import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useService from "../../../hook/useService";
import {
  postPublicData,
  uploadSingleImage,
} from "../../../BcckendConnection/postData";
import Swal from "sweetalert2";
import AllService from "./AllService";
import putSecureData from "../../../BcckendConnection/putData";

const Service = () => {
  const res = useService();
  const { data, isLoading, isError, error, refetch } = res;
  // Initialize useForm hook
  const { register, handleSubmit, reset } = useForm();

  // Modal state
  const [selectedService, setSelectedService] = useState(null);

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form submitted with data:", data);

    const imageFile = data.image[0];
    const serviceImage = await uploadSingleImage(imageFile);

    const newData = {
      title: data.title,
      description: data.description,
      serviceImage: serviceImage.data,
    };

    const res = await postPublicData("/services/create-service", newData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);

    if (res?.statusCode === 200) {
      Swal.fire({
        title: "Success!",
        text: "Service created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      refetch();
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an issue creating the service.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }

    reset();
  };

  // Modal state

  const onSubmitForUpdate = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const imageFile = formData.get("image");

    console.log(imageFile); // Log the uploaded image file
    const serviceImage = await uploadSingleImage(imageFile);

    const newData = {
      serviceImage: serviceImage?.data,
    };
    const res = await putSecureData(
      `/services/update/${selectedService?._id}`,
      newData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(res);

    if (res?.statusCode === 200) {
      Swal.fire({
        title: "Success!",
        text: "Service created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setSelectedService(null);
      refetch();
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an issue creating the service.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  // Handle modal open
  const handleModalOpen = (service) => {
    setSelectedService(service);
  };

  // Handle modal close
  const handleModalClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center text-teal-600 mb-6">
        Web Development Form
      </h2>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title Input */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-teal-600"
            >
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-teal-600"
            >
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              id="description"
              className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            />
          </div>

          {/* Image Input */}
          <div className="space-y-2">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-teal-600"
            >
              Upload Image
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Submit
          </button>
        </form>

        {/* All Services List */}
        <div>
          {/* <AllService data={data} isLoading={isLoading} /> */}

          {/* Service Table */}
          {/* Service Table */}
          <table className="min-w-full mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Description
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Service Image
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((service) => (
                <tr
                  key={service._id}
                  className="border-b border-gray-200 hover:bg-teal-50"
                >
                  <td className="py-3 px-6 text-sm text-gray-800">
                    {service.title}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800">
                    {service.description}
                  </td>
                  <td className="py-3 px-6 text-sm">
                    <img
                      src={service.serviceImage}
                      alt={service.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-3 px-6 text-sm">
                    <button
                      onClick={() => handleModalOpen(service)}
                      className="text-teal-600 hover:text-teal-700 focus:outline-none font-medium"
                    >
                      View Full Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Full Data */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl text-teal-600 mb-4">Edit Service</h2>
            <form onSubmit={onSubmitForUpdate} className="space-y-4">
              {/* Title Input */}
              {/* <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-teal-600"
                >
                  Title
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  id="title"
                  defaultValue={selectedService.title}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div> */}

              {/* Description Input */}
              {/* <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-teal-600"
                >
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  id="description"
                  defaultValue={selectedService.description}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="4"
                />
              </div> */}

              {/* Image Input */}
              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-teal-600"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                {selectedService.serviceImage && (
                  <img
                    src={selectedService.serviceImage}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover mt-4"
                  />
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleModalClose}
                className="bg-teal-600 text-white py-2 px-4 rounded-md"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded-md ml-2"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Service;

{
  /* <button
  type="button"
  onClick={handleModalClose}
  className="bg-teal-600 text-white py-2 px-4 rounded-md"
>
  Close
</button>
<button
  type="submit"
  className="bg-teal-600 text-white py-2 px-4 rounded-md ml-2"
>
  Save Changes
</button> */
}
