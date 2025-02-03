import React, { useState } from "react";

const Orders = () => {
  // Sample order data (structured based on your Order model)
  const [orders, setOrders] = useState([
    {
      _id: "1",
      userId: "65aefb5e9c9d3a001c4c1a12",
      gigId: "65aefb5e9c9d3a001c4c1a99",
      status: "Pending",
      requirements: "Need a professional logo animation",
      createdAt: "2024-02-01T14:00:00Z",
    },
    {
      _id: "2",
      userId: "65aefb5e9c9d3a001c4c1b34",
      gigId: "65aefb5e9c9d3a001c4c1c88",
      status: "Completed",
      requirements: "Website development for an e-commerce platform",
      createdAt: "2024-01-28T09:30:00Z",
    },
    {
      _id: "3",
      userId: "65aefb5e9c9d3a001c4c1d77",
      gigId: "65aefb5e9c9d3a001c4c1e22",
      status: "Active",
      requirements: "Need a VFX intro for a YouTube channel",
      createdAt: "2024-02-02T16:15:00Z",
    },
  ]);

  // Function to update status
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Orders</h2>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">User ID</th>
              <th className="py-3 px-4 text-left">Gig ID</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Requirements</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{order._id}</td>
                <td className="py-3 px-4">{order.userId}</td>
                <td className="py-3 px-4">{order.gigId}</td>
                <td className="py-3 px-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="px-3 py-1 rounded-full text-white text-sm bg-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option
                      value="Pending"
                      className="text-yellow-500 bg-white"
                    >
                      Pending
                    </option>
                    <option
                      value="Completed"
                      className="text-green-500 bg-white"
                    >
                      Completed
                    </option>
                    <option value="Canceled" className="text-red-500 bg-white">
                      Canceled
                    </option>
                    <option value="Active" className="text-blue-500 bg-white">
                      Active
                    </option>
                  </select>
                </td>
                <td className="py-3 px-4 truncate w-64">
                  {order.requirements}
                </td>
                <td className="py-3 px-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
