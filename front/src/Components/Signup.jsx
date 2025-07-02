import React, { useState } from 'react';
import API from '../api/Axios';

export default function SignupModal({ onClose, showNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'Volunteer',
    bloodGroup: '',
    address: '',
    reasonForJoining: '',
    areaOfInterest: '',
    gender: '',
    age: '',
    dateOfBirth: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/auth/signup', formData);
      showNotification('Signup successful!');
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-3 max-h-[80vh] overflow-y-auto pr-2">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />

          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Volunteer">Volunteer</option>
            <option value="Donor">Donor</option>
          </select>

          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <textarea name="address" placeholder="Residential Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />

          <textarea name="reasonForJoining" placeholder="Reason for Joining SUKA" value={formData.reasonForJoining} onChange={handleChange} className="w-full p-2 border rounded" required />

          <input type="text" name="areaOfInterest" placeholder="Area of Interest / Support" value={formData.areaOfInterest} onChange={handleChange} className="w-full p-2 border rounded" required />

          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" min={0} required />

          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-2 border rounded" required />

          <div className="flex justify-end space-x-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-800">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
