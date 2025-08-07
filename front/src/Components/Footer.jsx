import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe,FaLinkedin } from "react-icons/fa";
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
  {contact?.socialLinks?.facebook && (
    <a href={contact.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
      <FaFacebookF />
    </a>
  )}
  {contact?.socialLinks?.instagram && (
    <a href={contact.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
      <FaInstagram />
    </a>
  )}
  {contact?.socialLinks?.youtube && (
    <a href={contact.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
      <FaYoutube />
    </a>
  )}
  {contact?.socialLinks?.twitter && (
    <a href={contact.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
      <FaTwitter />
    </a>
  )}
  {contact?.socialLinks?.linkedin && (
    <a href={contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
      <FaLinkedin />
    </a>
  )}
</div>

          <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
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
  {contact?.website ? (() => {
    try {
      const formattedUrl = contact.website.startsWith("http://") || contact.website.startsWith("https://")
        ? contact.website
        : `https://${contact.website}`;

      const url = new URL(formattedUrl);
      const isExternal = url.hostname !== window.location.hostname;

     

      return (
        <a
          href={formattedUrl}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="hover:text-purple-900"
        >
          {contact.website}
        </a>
      );
    } catch (e) {
    
      return <span className="text-red-600">Invalid URL</span>;
    }
  })() : (
    <span className="text-gray-500">Not available</span>
  )}
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
