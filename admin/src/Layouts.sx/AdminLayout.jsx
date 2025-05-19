import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUsers,
  FaNewspaper,
  FaCalendarAlt,
  FaSmile,
  FaEnvelope,
  FaBriefcase,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';

import Topbar from '../components/Topbar';
import logo from "../assets/logof.png";
import AdminFooter from '../components/Footer';

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/dashboard/users", label: "Users", icon: <FaUsers /> },
    { path: "/dashboard/news", label: "News and Updates", icon: <FaNewspaper /> },
    { path: "/dashboard/events", label: "Upcoming Events", icon: <FaCalendarAlt /> },
    { path: "/dashboard/stories", label: "Success Stories", icon: <FaSmile /> },
    { path: "/dashboard/inquiries", label: "Inquiries List", icon: <FaEnvelope /> },
    { path: "/dashboard/careers", label: "Careers", icon: <FaBriefcase /> },
    { path: "/dashboard/subscribers", label: "Subscribers", icon: <FaMailBulk /> },
    { path: "/dashboard/contact-us", label: "Contact Us", icon: <FaPhone /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-200 p-6 flex flex-col justify-between">
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-8" />

          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-purple-900 text-white font-semibold"
                      : "hover:bg-purple-800 hover:text-white text-black font-bold"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
                <hr className="border-purple-300 my-1" />
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </div>
  );
}
