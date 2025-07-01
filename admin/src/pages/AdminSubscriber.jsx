import React, { useEffect, useState } from "react";
import axios from "../api/Axios";

const AdminSubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios.get("/api/subscribers")
      .then(res => setSubscribers(res.data.subscribers))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto  p-4">
      <h2 className="text-xl font-bold mb-4">📧 Email Subscribers</h2>
      <ul className="space-y-2">
        {subscribers.map((sub) => (
          <li key={sub._id} className="bg-white p-2 rounded shadow">
            {sub.email}{" "}
            <span className="text-gray-500 text-sm">
              ({new Date(sub.createdAt).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSubscriberList;
