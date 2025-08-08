import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../assets/logo.webp";
import { FaUserCircle } from "react-icons/fa";
import UserProfileModal from "./UserProfileModal"
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginModal from '../Components/Login';
import SignupModal from '../Components/Signup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState('');
const [showProfile, setShowProfile] = useState(false);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Programs", path: "/programs" },
    { name: "Resources", path: "/resources" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Donate", path: "/donate" },
    { name: "News & Media", path: "/news" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    setIsOpen(false);
    navigate(link.path); // ← programmatic navigation
  };


useEffect(() => {
  const current = navLinks.find(link => link.path === location.pathname);
  if (current) {
    setActiveLink(current.name);
  }
}, [location.pathname]);

useEffect(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  setUser(null);
  showNotification('Logout successful!');
  navigate('/');
 // reload to refresh UI
};

const showNotification = (msg) => {
  setNotification(msg);
  setTimeout(() => {
    setNotification('');
  }, 3000);
};

const handleLoginClose = () => {
  setShowLogin(false);
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
};


  return (
    <>
        {notification && (
  <div className="fixed justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-green-500 text-white px-4 py-2 rounded shadow-md z-9999 animate-fadeOut">
    {notification}
  </div>
)}
    <nav className="bg-white md:h-22 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
        {/* Logo */}
      <img className="w-47 h-20 cursor-pointer" src={logo} alt="Logo" onClick={() => navigate("/")} />

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className={`${
                activeLink === link.name
                  ? "text-purple-900 font-semibold"
                  : "text-black"
              } hover:text-purple-900 transition`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
  <div className="hidden md:flex items-center space-x-4">
  {user ? (
    <>
      <FaUserCircle className="text-2xl text-purple-900 cursor-pointer"   onClick={() => setShowProfile(true)} />
      
      <button
        onClick={handleLogout}
        className="bg-purple-900 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <button className="text-black hover:text-purple-900"
        onClick={() => setShowLogin(true)}>Login</button>
      <button className="bg-purple-900 text-white px-4 py-1 rounded hover:bg-blue-700"
        onClick={() => setShowSignup(true)}>
        Sign Up
      </button>
    </>
  )}
</div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className="md:hidden bg-white shadow-lg px-4 pb-4">
    {navLinks.map((link) => (
      <button
        key={link.name}
        onClick={() => handleLinkClick(link)}
        className={`block w-full text-left py-2 ${
          activeLink === link.name
            ? "text-purple-900 font-semibold"
            : "text-black"
        } hover:text-purple-900`}
      >
        {link.name}
      </button>
    ))}
    <hr className="my-2" />
    
    {user ? (
      <>
        <div className="flex items-center space-x-2 py-2">
          <FaUserCircle onClick={() => setShowProfile(true)}  className="text-xl text-purple-900 cursor-pointer" />
          <span className="text-black">{user.name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="block w-full text-left py-2 bg-purple-900 text-white rounded hover:bg-red-600 px-3"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <button
          className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
          onClick={() => {
            setShowLogin(true);
            setIsOpen(false);
          }}
        >
          Login
        </button>
        <button
          className="block w-full text-left py-2 bg-purple-900 text-white rounded hover:bg-blue-700 px-3"
          onClick={() => {
            setShowSignup(true);
            setIsOpen(false);
          }}
        >
          Sign Up
        </button>
      </>
    )}



  </div>
)}

    </nav>
  {showLogin && <LoginModal onClose={handleLoginClose} showNotification={showNotification} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} showNotification={showNotification} />}
{showProfile && user && (
  <UserProfileModal
    userId={user._id || user.id} 
    onClose={() => setShowProfile(false)}
    showNotification={showNotification}
  />
)}





      </>
  );
};

export default Navbar;
