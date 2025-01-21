import React, { useState } from "react";
import useUsers from "../../../hook/useUsers";
import putSecureData from "../../../BcckendConnection/putData";
import "sal.js/dist/sal.css";
import swal from "sweetalert";

const Users = () => {
  const { data, isLoading, isError, error, refetch } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");
//  console.log(data?.data)
  const handleUpdateClick = (user) => {
    setSelectedUser(user); 
    setNewRole(user.role); // Initialize the role input with the current role
    setIsModalOpen(true); // Open the modal
  };

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  const handleSubmit = async () => {
    const admin = {
      role: "admin",
    };
    const user = {
      role: "user",
    };
    try {
      // Simulate API call for updating role
      const response = await putSecureData(
        `/users/update-user/${selectedUser._id}`,
        selectedUser.role === "user" ? admin : user
      );
      console.log(response);
      if(response.statusCode ===200){
        await swal("Good job!", "Your account has been created!", "success");

     }
    
    } catch (err) {
      console.error("Error updating role:", err);
      alert("Error updating role");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Users List</h2>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-left">Phone</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data && data?.data?.length > 0 ? (
            data.data.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">{user.role}</td>
                <td className="py-4 px-6">{user.phone}</td>
                <td className="py-4 px-6">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleUpdateClick(user)}
                  >
                    Update Role
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">
              Update Role for {selectedUser.name}
            </h3>
            <div className="mb-4">
              <label htmlFor="role" className="block font-medium text-gray-700">
                Role:
              </label>
              <input
                id="role"
                type="text"
                value={newRole}
                onChange={handleRoleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
