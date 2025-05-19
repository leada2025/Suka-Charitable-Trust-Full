
import React, { useEffect, useState } from "react";
import axios from "../api/Axios"; // adjust path if needed


const GetInvolved = () => {

  const [upcomingEvents, setUpcomingEvents] = useState([]);

useEffect(() => {
  window.scroll(0, 0);
  fetchEvents();
}, []);

const fetchEvents = async () => {
  try {
    const res = await axios.get("/api/events"); // Make sure this route returns upcoming events
    setUpcomingEvents(res.data);
  } catch (err) {
    console.error("Failed to fetch events", err);
  }
};

   
  return (
     <section className=" min-h-screen px-6 md:px-20 py-16 relative">
        <br />
          <div className="absolute top-50 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-50 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute bottom-0 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute bottom-0 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

         <br />
      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
          Get Involved - SUKA Charitable Trust
        </h1>
        <p className="text-lg text-black mb-12 text-center max-w-3xl mx-auto">
          Whether you're a compassionate individual, a healthcare professional, or an organization, there's a way for you to contribute and make a difference in the lives of kidney patients across India.
        </p>

        {/* Volunteer Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🤝 Volunteer Opportunities</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Assist at Health Camps:</strong> Help run free kidney screening camps.</li>
            <li><strong>Support Patient Education:</strong> Provide guidance and information to patients and families.</li>
            <li><strong>Raise Awareness:</strong> Distribute materials and promote organ donation.</li>
            <li><strong>Provide Emotional Support:</strong> Offer companionship and counseling.</li>
            <li><strong>Administrative Support:</strong> Help coordinate events and office operations.</li>
          </ul>
          <p className="mt-4">
            <strong>How to Volunteer:</strong><br />
            Fill out the Volunteer Application Form on our website → Attend orientation → Select your role & availability.
          </p>
        </section>

        {/* Fundraising Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🎉 Fundraising Events</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Organize Events:</strong> Host charity walks, bake sales, or online drives.</li>
            <li><strong>Corporate Sponsorship:</strong> Involve your organization in giving back.</li>
            <li><strong>Crowdfunding:</strong> Start a personal fundraiser with friends & family.</li>
            <li><strong>Memorial Giving:</strong> Donate in memory of a loved one.</li>
          </ul>
       <div className="mt-4">
  <strong>Upcoming Events:</strong>
  {upcomingEvents.length > 0 ? (
    <ul className="list-disc pl-6 mt-2 space-y-1">
      {upcomingEvents.map((event) => (
        <li key={event._id}>
          <strong>{event.title}</strong> – {event.date} @ {event.location}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-600 mt-2">No upcoming events at the moment.</p>
  )}

  <p className="mt-4">
    Interested in hosting or fundraising?{" "}
    <a href="/contact" className="text-blue-700 underline">Contact us</a> for help and promotion.
  </p>
</div>

        </section>

        {/* Partnerships */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🤝 Partnerships</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Hospitals & Providers:</strong> Improve transplant processes and ethics.</li>
            <li><strong>Educational Institutions:</strong> Deliver kidney health seminars.</li>
            <li><strong>NGOs:</strong> Collaborate for holistic patient support.</li>
            <li><strong>Corporates:</strong> CSR initiatives and staff engagement.</li>
            <li><strong>Community Groups:</strong> Spread awareness and increase reach.</li>
          </ul>
          <p className="mt-4">
            <strong>Why Partner with Us?</strong><br />
            Support a life-saving cause → Boost your impact → Be recognized as a responsible organization.<br />
            <br />
            <a href="/contact" className="text-blue-700 underline">Reach out</a> to explore partnership opportunities.
          </p>
        </section>

        {/* Careers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">💼 Career Opportunities</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Healthcare Professionals:</strong> Doctors, nurses, counselors for patient support.</li>
            <li><strong>Program Coordinators:</strong> Run health camps and awareness campaigns.</li>
            <li><strong>Administrative Staff:</strong> Keep programs running smoothly.</li>
            <li><strong>Marketing Specialists:</strong> Promote our work online and offline.</li>
            <li><strong>Writers & Educators:</strong> Create content and educational programs.</li>
          </ul>
          <p className="mt-4">
           
            <a href="/careers" className="text-blue-700 underline">Visit our Careers page</a> to apply or learn more.
          </p>
        </section>

        {/* Final Call to Action */}
        <div className="text-center mt-10 text-purple-900">
          🌐 <strong>Let’s Make a Difference Together</strong><br />
          However you choose to get involved, your support helps save lives. <span className="text-blue-600"> <a href="/contact" className="underline">Join our mission today!</a></span>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
