
import axios from "../api/Axios";
import React, { useEffect, useState } from "react";

const NewsMediaPage = () => {
  
    const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

useEffect(()=>{
window.scroll(0, 0);
},[])

const handleSubscribe = async () => {
  if (!email) {
    setStatus("Please enter a valid email.");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    setStatus("Please log in to subscribe.");
    return;
  }

  try {
    const res = await axios.post(
      "/api/subscribers",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 201) {
      setStatus("✅ Thank you for subscribing! Please check your inbox.");
      setEmail("");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  } catch (err) {
    setStatus("❌ This email may already be subscribed or an error occurred.");
  }
};



  return (
     <section className=" min-h-screen px-6 md:px-20 py-16 relative">
        <br />
       <div className="absolute bottom-0 right-0 w-25 h-60 bg-gradient-to-br from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-25 h-20 bg-gradient-to-br from-blue-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
<div className="absolute top-0 left-0 w-30 h-150 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
<div className="absolute top-0 right-0 w-20 h-40 bg-gradient-to-br from-blue-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <br />
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">News & Media</h1>
        <p className="text-lg text-black max-w-3xl mx-auto">
          Stay updated with our latest announcements, achievements, and insights into kidney health and transplantation.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">📰 Press Releases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Launch of Kidney Health Awareness Campaign in Coimbatore.</li>
          <li>Partnership with leading hospitals for ethical transplant support.</li>
          <li>Free Screening Camps for Underserved Communities.</li>
        </ul>
        <p className="mt-4">Stay tuned for more impactful updates.</p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">📬 Newsletters</h2>
        <p className="mb-4">Subscribe to get monthly updates including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kidney health tips & expert guidance</li>
          <li>Inspiring patient success stories</li>
          <li>Upcoming SUKA events</li>
          <li>Healthcare expert interviews</li>
        </ul>
         <div className="mt-6 max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded-md mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full bg-purple-600 hover:bg-purple-900 text-white py-2 rounded-md"
        onClick={handleSubscribe}
      >
        📌 Subscribe Now
      </button>
      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">📺 Media Coverage</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>“SUKA Charitable Trust Leads Kidney Health Awareness Drive in Tamil Nadu” – The Times of India</li>
          <li>“Free Screening Camps Offer Hope to Hundreds” – The Hindu</li>
          <li>“How SUKA Charitable Trust is Simplifying Kidney Transplants” – News18</li>
        </ul>
        <p className="mt-4">Interested in covering our story? Contact our Media Relations team.</p>
      </div>

      {/* <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">✍️ Blog Posts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understanding Kidney Health: Prevention and Care</li>
          <li>Legal Aspects of Kidney Transplants in India</li>
          <li>Real-Life Stories: Courageous Kidney Warriors</li>
          <li>Nutrition Tips for Kidney Patients</li>
        </ul>
        <p className="mt-4">📌 Visit our blog to stay informed and inspired.</p>
      </div> */}
    </section>
  );
};

export default NewsMediaPage;