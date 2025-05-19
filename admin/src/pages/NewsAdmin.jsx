import React, { useState, useEffect, useRef } from 'react';
import axios from '../api/Axios';

export default function NewsAdmin() {
  const [newsList, setNewsList] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', image: null });
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [existingImage, setExistingImage] = useState(null); // For existing image preview

  const fetchNews = async () => {
    const res = await axios.get('/api/news');
    setNewsList(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setForm({ ...form, image: file });
      if (file) {
        setPreview(URL.createObjectURL(file));
        setExistingImage(null); // Clear existing image preview when new selected
      } else {
        setPreview(null);
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const resetForm = () => {
    setForm({ title: '', description: '', image: null });
    setEditingId(null);
    setPreview(null);
    setExistingImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    if (form.image) data.append('image', form.image);

    try {
      if (editingId) {
        await axios.put(`/api/news/${editingId}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('/api/news', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      resetForm();
      fetchNews();
    } catch (err) {
      alert('Failed to submit news');
    }
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description, image: null });
    setEditingId(item._id);
    setPreview(null);
    setExistingImage(`https://suka-charitable-trust-full-backend.onrender.com/uploads/news/${item.image}`);

    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        await axios.delete(`/api/news/${id}`);
        fetchNews();
      } catch (err) {
        alert('Failed to delete news');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div ref={formRef}>
        <h2 className="text-2xl text-purple-900 font-bold mb-6">
          {editingId ? 'Edit News' : 'Add News & Updates'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border rounded p-2 w-full focus:outline-purple-600"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded p-2 w-full focus:outline-purple-600"
            required
          />
          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Image (Preferred: 1068x620px)
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full"
              accept="image/*"
            />
            {(preview || existingImage) && (
              <img
                src={preview || existingImage}
                alt="Preview"
                className="mt-2 h-32 rounded object-cover border"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
            >
              {editingId ? 'Update' : 'Submit'}
            </button>
            {editingId && (
              <button
                type="button"
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Uploaded News</h3>
      {newsList.length === 0 && <p>No news available.</p>}
      {newsList.map((item) => (
        <div
          key={item._id}
          className="border p-4 mb-4 rounded shadow relative bg-white"
        >
          <img
            src={`https://suka-charitable-trust-full-backend.onrender.com/uploads/news/${item.image}`}
            alt={item.title}
            className="w-full max-h-[400px] object-cover mb-2 rounded"
          />
          <h4 className="text-lg font-bold">{item.title}</h4>
          <p>{item.description}</p>
          <div className="flex gap-4 mt-2">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button
              className="text-red-600 hover:underline"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
