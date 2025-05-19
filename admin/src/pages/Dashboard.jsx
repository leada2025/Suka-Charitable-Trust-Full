import React, { useEffect, useState } from 'react';
import { FaUsers, FaFileAlt, FaCog } from 'react-icons/fa';
import axios from '../api/Axios';
import { Link } from 'react-router-dom';



export default function DashboardPage() {
  const [stats, setStats] = useState([
    {
      title: 'Total Users',
      value: 0,
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      color: 'bg-blue-100',
       path: '/dashboard/users',
    },
    {
      title: 'Total Inquiries',
      value: 0,
      icon: <FaFileAlt className="text-green-600 text-3xl" />,
      color: 'bg-green-100',
       path: '/dashboard/inquiries',
    },
    {
      title: 'Subscribers',
      value: 0,
      icon: <FaCog className="text-yellow-600 text-3xl" />,
      color: 'bg-yellow-100',
       path: '/dashboard/subscribers',
    },
  ]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token'); // ⬅️ Get token from localStorage

      const config = {
        headers: { Authorization: `Bearer ${token}` }, // ⬅️ Attach token here
      };

      const [userRes, inquiryRes, subscriberRes] = await Promise.all([
        axios.get('/api/users', config),
        axios.get('/api/inquiries'),
        axios.get('/api/subscribers'),
      ]);

      setStats(prev => [
        { ...prev[0], value: userRes.data.count },
        { ...prev[1], value: inquiryRes.data.count },
        { ...prev[2], value: subscriberRes.data.count },
      ]);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    }
  };

  fetchData();
}, []);

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {stats.map((stat, idx) => (
      <Link
        key={idx}
        to={stat.path}
        className={`p-6 rounded-xl shadow ${stat.color} flex items-center space-x-4 hover:scale-105 transition-transform`}
      >
        <div>{stat.icon}</div>
        <div>
          <p className="text-lg font-semibold">{stat.title}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      </Link>
    ))}
  </div>
  );
}
