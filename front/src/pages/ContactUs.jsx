import React, { useEffect, useState } from "react";
import axios from "../api/Axios";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube , FaLinkedin  } from "react-icons/fa";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("/api/contact-info").then((res) => setContactInfo(res.data));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");
    
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};

    await axios.post("/api/inquiries", formData, config);
    setSuccessMsg("Your message has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  } catch (err) {
    setSuccessMsg("Something went wrong. Please try again.");
  }
};


  return (
    <>
      <br />
      <br />
      <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Contact Us</h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Whether you’re a patient, donor, volunteer or partner, we’re here to connect and support you.
          </p>
        </div>

        {/* Contact Info */}
        {contactInfo && (
          <div className="space-y-4 mb-16">
            <h2 className="text-2xl font-semibold text-purple-900">📍 Contact Information</h2>
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contactInfo.phone}`} className="text-purple-900 hover:underline">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-purple-900 hover:underline">
                {contactInfo.email}
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:underline">
                {contactInfo.website}
              </a>
            </p>
            <p><strong>Office Hours:</strong> {contactInfo.officeHours}</p>
          </div>
        )}

        {/* Inquiry Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">📩 Inquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto mt-12">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-900 text-white py-2 rounded-md">📌 Submit Now</button>
            {successMsg && <p className="text-center text-green-600 mt-2">{successMsg}</p>}
          </form>
        </div>

        {/* Location Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">📍 Location Map</h2>
          <div className="w-full h-64">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.098496730296!2d76.96499170986333!3d11.031236489088082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586c00000039%3A0x1ab03c2cb32ea857!2sNvron%20Life%20Science%20Ltd!5e0!3m2!1sen!2sin!4v1754378553845!5m2!1sen!2sin"
              height="100%"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        {contactInfo?.socialLinks && (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌐 Connect with Us</h2>
            <div className="flex justify-center gap-6 text-2xl">
              {contactInfo.socialLinks.facebook && (
                <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:text-blue-600">
                  <FaFacebookF />
                </a>
              )}
              {contactInfo.socialLinks.instagram && (
                <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:text-pink-600">
                  <FaInstagram />
                </a>
              )}
              {contactInfo.socialLinks.twitter && (
                <a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:text-sky-500">
                  <FaTwitter />
                </a>
              )}
              {contactInfo.socialLinks.youtube && (
                <a href={contactInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:text-red-600">
                  <FaYoutube />
                </a>
              )}
              {contactInfo.socialLinks.linkedin && (
  <a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-900 hover:text-blue-700">
    <FaLinkedin />
  </a>
)}

            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactUsPage;
