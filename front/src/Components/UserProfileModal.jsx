import { useState, useEffect } from "react";
import axios from "../api/Axios";
import { FaUserCircle, FaEdit, FaTimes, FaSave } from "react-icons/fa";
import React from "react";

export default function UserProfileModal({ userId, onClose, showNotification }) {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userId) return;
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData(data);
      } catch (error) {
        console.error("Error fetching user", error);
        showNotification("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId, token, showNotification]);

  const handleChange = (e) => {
    if (!isEditing) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.put(`/api/users/${userId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("user", JSON.stringify(data.user));
      showNotification("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user", error);
      showNotification("Failed to update profile");
    }
  };

  if (!formData) return null;






  const genderOptions = ["Male", "Female", "Other"];
  const roleOptions = ["Donor", "Recipient", "Admin"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const hiddenFields = [
    "password",
    "_id",
    "__v",
    "createdAt",
    "updatedAt",
    "resetToken",
    "resetTokenExpiry",
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 bg-opacity-50 animate-fadeIn p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold text-purple-800">My Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Avatar & Edit Toggle */}
        <div className="flex flex-col items-center mt-4">
          <FaUserCircle className="text-purple-900" size={100} />
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-purple-900 mt-3 hover:text-purple-700"
            >
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>

        {/* Scrollable Form */}
        <div className="p-6 overflow-y-auto flex-1">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData).map((key) => {
                if (hiddenFields.includes(key)) return null;

                let value =
                  key === "dateOfBirth"
                    ? formData[key]
                      ? formData[key].split("T")[0]
                      : ""
                    : formData[key] || "";

                let inputElement;
                if (!isEditing) {
                  inputElement = (
                    <p className="border p-2 rounded bg-gray-100 text-gray-800">
                      {value || "—"}
                    </p>
                  );
                } else {
                  if (key === "gender") {
                    inputElement = (
                      <select
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                      >
                        <option value="">Select Gender</option>
                        {genderOptions.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    );
                  } else if (key === "role") {
                    inputElement = (
                      <select
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                      >
                        {roleOptions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    );
                  } else if (key === "bloodGroup") {
                    inputElement = (
                      <select
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                      >
                        <option value="">Select Blood Group</option>
                        {bloodGroups.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    );
                  } else {
                    inputElement = (
                      <input
                        type={key === "dateOfBirth" ? "date" : "text"}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                      />
                    );
                  }
                }

                return (
                  <div key={key}>
                    <label className="block text-gray-700 font-medium capitalize mb-1">
                      {key}
                    </label>
                    {inputElement}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {isEditing && (
          <div className="flex justify-end space-x-3 p-4 border-t bg-gray-50">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-700 flex items-center gap-2"
            >
              <FaSave /> Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
