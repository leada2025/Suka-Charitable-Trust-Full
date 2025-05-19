import { useState } from "react";
import axios from "../api/Axios";
import React from 'react';
import logo from "../assets/logof.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axios.post("/api/auth/forgot-password", { email });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/background.webp')`,
      }}>
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 p-6 rounded shadow-md w-full max-w-sm space-y-4 flex flex-col items-center"
      >
         <img className="w-24 h-24 mb-4" src={logo} alt="Logo" />
        <h2 className="text-xl font-semibold text-center">Forgot Password</h2>
        <p className="text-sm text-black-600 text-center">
          Enter your admin email to receive a password reset link.
        </p>

        {message && <p className="text-green-600 text-sm">{message}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
