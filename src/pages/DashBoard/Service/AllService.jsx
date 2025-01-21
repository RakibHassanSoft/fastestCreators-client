import React from 'react';

const AllService = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="table-container">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Admin</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((service) => (
              <tr key={service._id}>
                <td className="border px-4 py-2">
                  {/* Render admin name */}
                  {service.adminId ? service.adminId.name : 'No Admin'}
                </td>
                <td className="border px-4 py-2">{service.title}</td>
                <td className="border px-4 py-2">{service.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border px-4 py-2 text-center">
                No services found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllService;
