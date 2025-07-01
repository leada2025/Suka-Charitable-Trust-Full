import axios from "../api/Axios";
import React, { useEffect, useState, useRef } from "react";

const AdminCareers = () => {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Job",
    status: "open",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setFetchError(null);
      const res = await axios.get("/api/careers");
      setCareers(res.data);
    } catch (err) {
      console.error(err);
      setFetchError("Failed to load careers. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear description if category changed to Internship
    if (name === "category" && value === "Internship") {
      setFormData((prev) => ({ ...prev, category: value, description: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    try {
      const dataToSubmit = {
        ...formData,
        description: formData.category === "Internship" ? "" : formData.description,
      };

      if (editingId) {
        await axios.put(`/api/careers/${editingId}`, dataToSubmit);
      } else {
        await axios.post("/api/careers", dataToSubmit);
      }
      setFormData({ title: "", description: "", category: "Job", status: "open" });
      setEditingId(null);
      fetchCareers();
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to save career. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (career) => {
    setFormData({
      title: career.title,
      description: career.description,
      category: career.category,
      status: career.status,
    });
    setEditingId(career._id);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    // Optional: Add confirm if form has changes
    setEditingId(null);
    setFormData({ title: "", description: "", category: "Job", status: "open" });
    setSubmitError(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this career?")) {
      try {
        await axios.delete(`/api/careers/${id}`);
        fetchCareers();
      } catch (err) {
        alert("Failed to delete career. Please try again.");
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl text-purple-900 font-bold mb-6" ref={formRef}>
        Manage Careers
      </h2>

      {fetchError && (
        <p className="text-red-600 mb-4" role="alert">
          {fetchError}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mb-8 space-y-5 bg-white p-6 rounded shadow-md" aria-label="Career management form">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder={
              formData.category === "Internship"
                ? "Description not required for Internship"
                : "Description"
            }
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required={formData.category !== "Internship"}
            disabled={formData.category === "Internship"}
          />
          {formData.category === "Internship" && (
            <p className="text-red-600 text-sm mt-1">
              * Description is not required for Internship
            </p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="block font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {submitError && (
          <p className="text-red-600" role="alert">
            {submitError}
          </p>
        )}

        <div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {editingId ? (loading ? "Updating..." : "Update Career") : loading ? "Adding..." : "Add Career"}
          </button>
          {editingId && !loading && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="ml-4 px-4 py-2 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {careers.length === 0 ? (
        <p>No careers found.</p>
      ) : (
        <ul className="space-y-6">
          {careers.map((career) => (
            <li
              key={career._id}
              className="border p-5 rounded bg-white shadow-sm"
              aria-label={`Career ${career.title}, category ${career.category}, status ${career.status}`}
            >
              <h3 className="font-semibold text-lg mb-1">
                {career.title} ({career.category})
              </h3>
              <p>{career.description || <em className="text-gray-500">N/A</em>}</p>
              <p className="mt-2 font-medium">Status: {career.status}</p>
              <button
                onClick={() => handleEdit(career)}
                className="mr-4 text-blue-600 hover:underline"
                aria-label={`Edit career ${career.title}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(career._id)}
                className="text-red-600 hover:underline"
                aria-label={`Delete career ${career.title}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminCareers;
