import React, { useState, useEffect } from "react";
import axios from "../api/Axios";

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

  const token = localStorage.getItem("token");
  if (!token) {
    setSuccessMsg("You must be logged in to submit an inquiry.");
    return;
  }

  try {
    await axios.post("/api/inquiries", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccessMsg("Your message has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  } catch (err) {
    setSuccessMsg("Something went wrong. Please try again.");
  }
};


  return (
    <>
    <br /><br />
    <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 w-40 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4 w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0647865042624!2d76.95087554051479!3d11.033766176481237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858f33da03f53%3A0x4b2db3750d544dff!2sKannappa%20Nagar%2C%20Sanganoor%2C%20Coimbatore%2C%20Tamil%20Nadu%20641027!5e0!3m2!1sen!2sin!4v1747379325504!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>

      {/* Social Links */}
      {contactInfo && contactInfo.socialLinks && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌐 Connect with Us</h2>
          <p className="mb-2">Facebook: <a href={contactInfo.socialLinks.facebook} target="_blank" className="text-purple-900 hover:underline">{contactInfo.socialLinks.facebook}</a></p>
          <p className="mb-2">Instagram: <a href={contactInfo.socialLinks.instagram} target="_blank" className="text-purple-900 hover:underline">{contactInfo.socialLinks.instagram}</a></p>
          <p className="mb-2">Twitter: <a href={contactInfo.socialLinks.twitter} target="_blank" className="text-purple-900 hover:underline">{contactInfo.socialLinks.twitter}</a></p>
          <p>YouTube: <a href={contactInfo.socialLinks.youtube} target="_blank" className="text-purple-900 hover:underline">{contactInfo.socialLinks.youtube}</a></p>
        </div>
      )}
    </section>
    </>
  );
};

export default ContactUsPage;
