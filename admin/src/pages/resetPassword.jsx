import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/Axios';
import React from 'react'
import logo from "../assets/logof.png";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');

    try {
      const res = await axios.post(`/api/auth/reset-password/${token}`, { password });
      setMessage(res.data.message);
      setTimeout(() => navigate('/'), 2000); // Redirect to login after success
    } catch (err) {
      setError(err.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <div
    className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/background.webp')`,
      }}>
      <form onSubmit={handleSubmit} className="bg-white/60 p-6 rounded shadow-md w-full max-w-sm space-y-4 flex flex-col items-center">
         <img className="w-24 h-24 mb-4" src={logo} alt="Logo" />
        <h2 className="text-xl font-semibold">Reset Password</h2>
        {error && <p className="text-red-600">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-purple-900 text-white p-2 rounded hover:bg-blue-700">
          Reset Password
        </button>
      </form>
    </div>
  );
}
