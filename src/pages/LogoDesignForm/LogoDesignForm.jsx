import React from 'react';
import FrequentlyAsked from './FrequentlyAsked';

const LogoDesignForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="w-9/12 m-ato mx-auto ">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Logo Design Form</h2>

                {/* Left Part of the Form */}
                <div className="mb-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandDescription">
                                Write About Your Brand
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="brandDescription"
                                placeholder="Tell us about your business, services, or any important detail"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Right Part of the Form */}
                <div className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referenceImage">
                                Upload Any Reference Image (Max size 15MB)
                            </label>
                            <input
                                className="hidden"
                                id="logoImage"
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                required
                            />
                            <label
                                htmlFor="logoImage"
                                className="cursor-pointer w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                            >
                                Choose Reference +
                            </label>
                        </div>
                        <div>
                            <label htmlFor="logoImage" className="block text-gray-700 text-sm font-bold mb-2">
                                Upload Logo
                            </label>
                            <input
                                className="hidden"
                                id="logoImage"
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                required
                            />
                            <label
                                htmlFor="logoImage"
                                className="cursor-pointer w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                            >
                                Choose Logo Image +
                            </label>

                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designPackage">
                                Choose Logo Design Package
                            </label>
                            <select
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="designPackage"
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="basic">Basic Package</option>
                                <option value="standard">Standard Package</option>
                                <option value="premium">Premium Package</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logoStyle">
                                Choose Logo Style
                            </label>
                            <select
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="logoStyle"
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="modern">Modern</option>
                                <option value="vintage">Vintage</option>
                                <option value="minimalistic">Minimalistic</option>
                                <option value="luxury">Luxury</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessWebsite">
                                Enter Your Business Website
                            </label>
                            <input
                                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="businessWebsite"
                                type="url"
                                placeholder="Enter your business website URL"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4  w-1/6 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <FrequentlyAsked></FrequentlyAsked>
        </div>
    );
};

export default LogoDesignForm;
