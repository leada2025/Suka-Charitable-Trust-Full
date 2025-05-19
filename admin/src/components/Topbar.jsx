import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logof.png';

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    window.location.href = '/'; // Redirect to login page
  };

  // Map paths to friendly page titles
  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/dashboard/users': 'Users',
    '/dashboard/news': 'News and Updates',
    '/dashboard/events': 'Upcoming Events',
    '/dashboard/stories': 'Success Stories',
    '/dashboard/inquiries': 'Inquiries List',
    '/dashboard/careers': 'Careers',
    '/dashboard/subscribers': 'Subscribers',
    '/dashboard/contact-us': 'Contact Us',
  };

  // Get current page title based on location
  const currentPath = location.pathname;
  const pageTitle = pageTitles[currentPath] || 'Dashboard';

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow relative z-10">
      {/* Left - Page title */}
      <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>

      {/* Right - logo + user dropdown */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none"
          >
            <FaUserCircle size={24} />
            <span className="font-medium">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-20">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
