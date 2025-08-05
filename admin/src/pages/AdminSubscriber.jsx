import React, { useEffect, useState } from "react";
import axios from "../api/Axios";

const AdminSubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 30; // You can change this to any number


  useEffect(() => {
    axios.get("/api/subscribers")
      .then(res => setSubscribers(res.data.subscribers))
      .catch(err => console.error(err));
  }, []);
const totalPages = Math.ceil(subscribers.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentSubscribers = subscribers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-3xl mx-auto  p-4">
      <h2 className="text-xl font-bold mb-4">📧 Email Subscribers</h2>
      <ul className="space-y-2">
       {currentSubscribers.map((sub) => (
          <li key={sub._id} className="bg-white p-2 rounded shadow">
            {sub.email}{" "}
            <span className="text-gray-500 text-sm">
              ({new Date(sub.createdAt).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
  <div className="flex justify-center gap-2 mt-4">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Prev
    </button>

    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-3 py-1 rounded ${
          currentPage === i + 1
            ? 'bg-purple-700 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        {i + 1}
      </button>
    ))}

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}

    </div>
  );
};

export default AdminSubscriberList;
