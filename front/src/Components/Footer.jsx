import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import axios from "../api/Axios";
import logo from "../assets/logof.png";

const Footer = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const res = await axios.get("/api/contact-info");
      setContact(res.data);
    };
    fetchContact();
  }, []);

  return (
    <footer className="bg-purple-200 text-black py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <img src={logo} alt="SUKA Logo" className="h-40 md:w-40 mb-4" />
          <p className="mb-4 font-semibold">Follow Us</p>
          <div className="flex space-x-4 mb-4">
            <a href={contact?.facebook || "#"} className="hover:text-purple-900"><FaFacebookF /></a>
            <a href={contact?.instagram || "#"} className="hover:text-purple-900"><FaInstagram /></a>
            <a href={contact?.youtube || "#"} className="hover:text-purple-900"><FaYoutube /></a>
            <a href={contact?.twitter || "#"} className="hover:text-purple-900"><FaTwitter /></a>
          </div>
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/programs" className="hover:underline">Our Programs</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li>
            <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
            <li><a href="/news" className="hover:underline">News & Media</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="flex items-start gap-3 text-sm mb-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>{contact?.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm mb-2">
            <FaPhone />
            <a href={`tel:${contact?.phone}`} className="hover:text-purple-900">{contact?.phone}</a>
          </div>
          <div className="flex items-center gap-3 text-sm mb-2">
            <FaEnvelope />
            <a href={`mailto:${contact?.email}`} className="hover:text-purple-900">{contact?.email}</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FaGlobe />
            <span>{contact?.website}</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-900 mt-8">
        © {new Date().getFullYear()} SUKA Charitable Trust. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
