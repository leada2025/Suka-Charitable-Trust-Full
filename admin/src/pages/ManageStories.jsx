import React, { useState, useEffect, useRef } from "react";
import axios from "../api/Axios";

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchStories();
  }, []);

  // Clean up preview URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview && formData.image) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, formData.image]);

  const fetchStories = async () => {
    try {
      const res = await axios.get("/api/stories");
      setStories(res.data);
    } catch (err) {
      console.error("Error fetching stories", err);
      alert("Failed to fetch stories.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      if (files[0]) {
        if (preview && formData.image) URL.revokeObjectURL(preview); // Revoke old preview
        setFormData((prev) => ({ ...prev, image: files[0] }));
        setPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingId) {
        await axios.put(`/api/stories/${editingId}`, data);
      } else {
        await axios.post("/api/stories", data);
      }
      fetchStories();
      resetForm();
    } catch (err) {
      console.error("Error saving story", err);
      alert("Failed to save story.");
    }
  };

  const handleEdit = (story) => {
    setEditingId(story._id);
    setFormData({
      title: story.title,
      description: story.description,
      image: null,
    });
    setPreview(story.imageUrl || `http://localhost:5000/uploads/stories/${story.image}`);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this story?")) return;
    try {
      await axios.delete(`/api/stories/${id}`);
      fetchStories();
    } catch (err) {
      console.error("Error deleting story", err);
      alert("Failed to delete story.");
    }
  };

  const resetForm = () => {
    if (preview && formData.image) URL.revokeObjectURL(preview); // Clean preview URL
    setFormData({ title: "", description: "", image: null });
    setEditingId(null);
    setPreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto" ref={formRef}>
      <h2 className="text-3xl font-bold mb-6 text-purple-900">
        Manage Community Stories
      </h2>

      <form onSubmit={handleSubmit} className="p-6 rounded-md mb-8 border bg-white shadow">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-purple-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-purple-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-1 text-sm text-gray-600">
            Image (Preferred: 644x644px)
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            aria-describedby="imageHelp"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-32 rounded object-cover border"
            />
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-purple-900 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            aria-label={editingId ? "Update story" : "Add story"}
          >
            {editingId ? "Update Story" : "Add Story"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="border border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition"
              aria-label="Cancel editing"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stories.length === 0 ? (
          <p className="text-gray-600">No stories found.</p>
        ) : (
          stories.map((story) => (
            <div
              key={story._id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <img
                src={
                  story.image
                    ? `http://localhost:5000/uploads/stories/${story.image}`
                    : "https://via.placeholder.com/644?text=No+Image"
                }
                alt={story.title}
                className="h-80 w-full object-contain rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{story.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                {story.description}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(story)}
                  className="text-blue-600 hover:underline"
                  aria-label={`Edit story titled ${story.title}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(story._id)}
                  className="text-red-600 hover:underline"
                  aria-label={`Delete story titled ${story.title}`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageStories;
