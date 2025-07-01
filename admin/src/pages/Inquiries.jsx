import React, { useEffect, useState } from "react";
import axios from "../api/Axios";

const InquiryAdmin = () => {
  const [inquiries, setInquiries] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("/api/inquiries");
        setInquiries(res.data.inquiries);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch inquiries", err);
        setError("Failed to load inquiries.");
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`/api/inquiries/${id}`, { status: newStatus });
      setInquiries((prev) =>
        prev.map((inq) =>
          inq._id === id ? { ...inq, status: newStatus } : inq
        )
      );
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Failed to update status.");
    }
  };

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  if (loading) return <p className="p-6">Loading inquiries...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-4">📥 Inquiry Submissions</h2>
      {inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Message</th>
                <th className="p-2">Submitted At</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => {
                const messageTooLong = inq.message.length > 100;
                const displayedMessage =
                  expandedCard === inq._id
                    ? inq.message
                    : messageTooLong
                    ? inq.message.slice(0, 100)
                    : inq.message;

                return (
                  <tr key={inq._id} className="border-t">
                    <td className="p-2">{inq.name}</td>
                    <td className="p-2">{inq.email}</td>
                    <td className="p-2">{inq.phone}</td>
                    <td className="p-2">{inq.subject}</td>
                    <td className="p-2 max-w-xs whitespace-pre-wrap break-words">
                      {displayedMessage}
                      {messageTooLong && (
                        <>
                          {expandedCard !== inq._id && "... "}
                          <button
                            onClick={() => toggleReadMore(inq._id)}
                            className="text-blue-600 ml-2 underline"
                            aria-label={
                              expandedCard === inq._id
                                ? "Show less message"
                                : "Read more message"
                            }
                          >
                            {expandedCard === inq._id
                              ? "Show less"
                              : "Read more"}
                          </button>
                        </>
                      )}
                    </td>
                    <td
                      className={`p-2 font-medium ${
                        inq.status === "Pending"
                          ? "text-green-600"
                          : inq.status === "Inquired"
                          ? "text-yellow-600"
                          : "text-gray-700"
                      }`}
                    >
                      {new Date(inq.createdAt).toLocaleString()}
                    </td>
                    <td className="p-2">
                      <select
                        value={inq.status || "Pending"}
                        onChange={(e) =>
                          handleStatusChange(inq._id, e.target.value)
                        }
                        className={`border p-1 rounded ${
                          inq.status === "Pending"
                            ? "text-green-600"
                            : inq.status === "Inquired"
                            ? "text-yellow-600"
                            : "text-gray-700"
                        }`}
                        aria-label={`Set status for inquiry from ${inq.name}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Inquired">Inquired</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InquiryAdmin;
