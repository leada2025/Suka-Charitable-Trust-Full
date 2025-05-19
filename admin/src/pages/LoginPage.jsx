import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/Axios";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import logo from "../assets/logof.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  setError(null);

  try {
    const res = await axios.post(
      "/api/auth/login",
      { email, password },
      { withCredentials: true }
    );

    console.log('Login response data:', res.data);  // << Add this

    const token = res.data.token;
    const user = res.data.user;

    if (
      user?.role?.toLowerCase() === "admin" 
      
    ) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setError("Access denied. Admins only.");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/background.webp')`,
      }}
    >
      <Card className="w-full max-w-sm shadow-xl p-6 bg-white/60 bg-opacity-90 flex flex-col items-center ">
        <img className="w-24 h-24 mb-4" src={logo} alt="Logo" />
        <h1 className="text-2xl font-semibold mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4 w-full">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button type="submit" className="w-full bg-purple-900">
            Login
          </Button>
          <p className="text-sm text-center mt-2">
  <span
    className="text-blue-700 hover:underline cursor-pointer"
    onClick={() => navigate("/forgot-password")}
  >
    Forgot password?
  </span>
</p>
        </form>
      </Card>
    </div>
  );
}
