import React, { useEffect, useState } from "react";
import axios from "../api/Axios";

export default function EventsAdmin() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ date: "", title: "", location: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      alert("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/events/${editingId}`, form);
      } else {
        await axios.post("/api/events", form);
      }
      setForm({ date: "", title: "", location: "" });
      setEditingId(null);
      fetchEvents();
    } catch (err) {
      alert("Submission failed");
    }
  };

  const handleEdit = (event) => {
    setForm({ date: event.date, title: event.title, location: event.location });
    setEditingId(event._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`/api/events/${id}`);
        fetchEvents();
      } catch (err) {
        alert("Failed to delete event");
      }
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl text-purple-900 font-bold mb-4">
        {editingId ? "Edit Event" : "Add Event"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date (e.g., 14 MAY)"
          className="border rounded p-2 w-full focus:outline-purple-600"
          required
        />
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border rounded p-2 w-full focus:outline-purple-600"
          required
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border rounded p-2 w-full focus:outline-purple-600"
          required
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
          >
            {editingId ? "Update" : "Submit"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setForm({ date: "", title: "", location: "" });
                setEditingId(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
      {events.length === 0 ? (
        <p className="text-gray-600">No events found.</p>
      ) : (
        events.map((e) => (
          <div key={e._id} className="border p-4 mb-3 rounded bg-white shadow">
            <div className="text-gray-600 mb-1">{e.date}</div>
            <h4 className="font-bold text-lg">{e.title}</h4>
            <div className="text-sm text-gray-500">{e.location}</div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(e)}
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(e._id)}
                className="text-red-600 underline hover:text-red-800 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
