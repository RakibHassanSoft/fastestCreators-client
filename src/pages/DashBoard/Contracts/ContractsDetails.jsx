import { useEffect, useState } from "react";
import { getPublicData } from "../../../BcckendConnection/getData";

// Modal Component
const MessageModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null; // Don't render modal if it's closed

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
        <h3 className="text-xl font-bold mb-4">Message Details</h3>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContractsDetails = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    fetchContacts();
  }, [sortOrder]);

  const fetchContacts = async () => {
    try {
      const response = await getPublicData("/contracts/get-all");
      // console.log("API Response:", response);
      if (response.statusCode === 200 && Array.isArray(response?.data)) {
        // Sort data by createdAt date
        const sortedContacts = response.data.sort((a, b) => {
          return sortOrder === "asc"
            ? new Date(a.createdAt) - new Date(b.createdAt)
            : new Date(b.createdAt) - new Date(a.createdAt);
        });
        setContacts(sortedContacts);
      } else {
        setError("Invalid data format from server.");
      }
    } catch (err) {
      setError("Failed to fetch contacts.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const openModal = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage("");
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-4">Contact List</h1>
      <button
        onClick={toggleSortOrder}
        className="px-4 py-2 bg-green-600 text-white rounded-lg mb-4"
      >
        Sort by Date ({sortOrder === "asc" ? "Oldest First" : "Newest First"})
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Country</th>
              <th className="px-4 py-2 border">Contract Number</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact,index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border text-center">{contact?.name}</td>
                <td className="px-4 py-2 border text-center">{contact?.email}</td>
                <td className="px-4 py-2 border text-center">{contact?.country}</td>
                <td className="px-4 py-2 border text-center">{contact?.contractNumber}</td>
                <td className="px-4 py-2 border text-center">
                  <div
                    className="overflow-hidden overflow-ellipsis text-center"
                    style={{ maxWidth: "300px", whiteSpace: "nowrap" }}
                    title={contact?.message}
                  >
                    <button
                      onClick={() => openModal(contact.message)}
                      className="ml-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      View Full Message
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  {new Date(contact?.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing full message */}
      <MessageModal
        isOpen={isModalOpen}
        message={selectedMessage}
        onClose={closeModal}
      />
    </div>
  );
};

export default ContractsDetails;
