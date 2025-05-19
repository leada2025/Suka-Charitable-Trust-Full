import React, { useEffect, useState, useCallback } from 'react'; 
import API from '../api/Axios';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'Volunteer', password: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const token = localStorage.getItem('token');

  // Debounce helper
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const fetchUsers = useCallback(
  async (searchTerm = '') => {
    setLoading(true);
    try {
      const res = await API.get('/api/users', {
        headers: { Authorization: `Bearer ${token}` },
        params: searchTerm ? { search: searchTerm } : {},
      });
      setUsers(res.data.users); // ✅ FIXED HERE
      setError(null);
    } catch (err) {
      setError('Failed to load users.');
    } finally {
      setLoading(false);
    }
  },
  [token]
);


  // Initial fetch and also fetch when search changes (debounced)
  useEffect(() => {
    if (!token) {
      setError('Unauthorized. Please log in.');
      setLoading(false);
      return;
    }

    const debouncedFetch = debounce(fetchUsers, 300);
    debouncedFetch(search);
  }, [search, token, fetchUsers]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };

      if (editingId) {
        delete payload.password;
        await API.put(`/api/users/${editingId}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await API.post('/api/users', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      fetchUsers(search);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', role: 'Volunteer', password: '' });
      setEditingId(null);
    } catch (err) {
      console.error('Error saving user:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers(search);
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      role: user.role || 'Volunteer',
      password: ''
    });
    setEditingId(user._id || user.id);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
       
        <button
          onClick={() => {
            setFormData({ name: '', email: '', phone: '', role: 'Volunteer', password: '' });
            setEditingId(null);
            setIsModalOpen(true);
          }}
          className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search users..."
        className="mb-4 w-full p-2 border border-gray-300 rounded"
        value={search}
        onChange={handleSearchChange}
      />

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Role</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan="5" className="text-center p-4">No users found.</td></tr>
            ) : (
              users.map((user) => (
                <tr key={user._id || user.id} className="border-t">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id || user.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* Modal for add/edit users */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit User' : 'Add New User'}
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Volunteer">Volunteer</option>
                <option value="Donor">Donor</option>
                <option value="Admin">Admin</option>
              </select>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required={!editingId}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingId(null);
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
