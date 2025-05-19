import React, { useState } from 'react';
import API from '../api/Axios';

export default function LoginModal({  onClose, showNotification }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post('/api/auth/login', formData);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ store user info
  showNotification('Login successful!');
setTimeout(() => {
  onClose();
}, 500);

   
  } catch (err) {
    setError(err.response?.data?.message || 'Login failed.');
  }
};






  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow">
        <h2 className="text-xl font-semibold mb-4">Log In</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-blue-700">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
