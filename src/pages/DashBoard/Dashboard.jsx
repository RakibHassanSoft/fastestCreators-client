// Import required dependencies
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaBars,
  FaBox,
  FaProductHunt,
  FaPhone,
  FaServicestack,
  FaHeadSideVirus,
  FaHome,
} from "react-icons/fa"; // Import icons
import useAdmin from "../../hook/useAdmin";

const DashBoard = () => {
  const { data, loading, isError, error } = useAdmin();
  // console.log(data?.data?.data?.role)
  const role = data?.data?.data?.role;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-xl font-semibold text-blue-600">
          Loading data, please wait...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 bg-black text-white p-5 shadow-md transform mt-16 lg:mt-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link
            onClick={toggleSidebar}
            to="/dashboard"
            className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>

          {role === "admin" && (
            <>
              {/* <Link
                onClick={toggleSidebar}
                to="/dashboard/users"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaUsers className="mr-2" /> Users
              </Link> */}
              {/* <Link
                onClick={toggleSidebar}
                to="/dashboard/gig"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaServicestack className="mr-2" /> Gig
              </Link> */}
              <Link
                onClick={toggleSidebar}
                to="/dashboard/service"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaHeadSideVirus className="mr-2" /> Portfolio
              </Link>

              <Link
                onClick={toggleSidebar}
                to="/dashboard/orders"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaBox className="mr-2" /> Order
              </Link>
              <Link
                onClick={toggleSidebar}
                to="/dashboard/contracts"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaProductHunt className="mr-2" /> Request
              </Link>
            </>
          )}

          {role === "user" && (
            <>
              <Link
                onClick={toggleSidebar}
                to="/dashboard/my-order"
                className="flex items-center py-2 px-4 rounded hover:bg-orange-600"
              >
                <FaHome className="mr-2" /> My Orders
              </Link>
            </>
          )}
          <Link
            onClick={toggleSidebar}
            to="/"
            className="p-t-4 border-t-white flex items-center py-2 px-4 rounded hover:bg-orange-600"
          >
            <FaHome className="mr-2" /> Home
          </Link>
        </nav>

        <nav>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-orange-100 p-4 shadow-md flex items-center justify-between">
          <h1 className="text-xl font-semibold text-orange-700 bg-white px-4 py-2 rounded-md shadow-md border-l-4 border-orange-500">
            Welcome to the Admin Panel
          </h1>
          <button
            className="md:hidden text-orange-700 text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </header>
        <section className="flex-1 p-4">
          <Outlet /> {/* This renders the child routes */}
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
