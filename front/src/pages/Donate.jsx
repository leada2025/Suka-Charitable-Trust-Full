import React from "react";

const Donate = () => {
  window.scroll(0, 0);

  return (
     <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Heading */} <br />
       <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-green-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 w-40 h-20 bg-gradient-to-br from-blue-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      {/* Bottom-right purple gradient */}
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
       <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <br />
      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-8">
          Donate – SUKA Charitable Trust
        </h1>
        <p className="text-lg text-center text-black mb-12 max-w-3xl mx-auto">
          Your generosity can transform lives. Every donation helps us support kidney patients,
          promote kidney health and ensure ethical and transparent transplant practices across India.
        </p>

        {/* One-Time Donation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌟 One-Time Donation</h2>
          <p className="mb-4">
            Your one-time gift helps us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Organize free kidney screening camps in underserved areas.</li>
            <li>Provide financial aid to dialysis patients.</li>
            <li>Run kidney health awareness campaigns.</li>
            <li>Create educational resources for patients and families.</li>
          </ul>
          <p className="mt-4">
            <strong>How to Donate:</strong> Visit our secure donation page → Choose your amount → Complete the simple checkout.
          </p>
        </div>

        {/* Monthly Giving */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌱 Monthly Giving</h2>
          <p className="mb-4">
            Become a monthly donor and support sustainable impact. Your recurring donation will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure ongoing patient care and emotional support.</li>
            <li>Support monthly educational events and health programs.</li>
            <li>Fund emergency assistance for critical patients.</li>
          </ul>
          <p className="mt-4">
            <strong>Benefits:</strong> Automatic donations, impact updates and recognition in our Annual Impact Report.
            <br />
            <strong>How to Start:</strong> Select “Monthly Giving” on the donation page and set your amount.
          </p>
        </div>

        {/* Sponsor a Program */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🎯 Sponsor a Program</h2>
          <p className="mb-4">Directly fund a program and see the difference you make:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Free Screening Camps:</strong> Bring health checkups to rural areas.</li>
            <li><strong>Patient Assistance:</strong> Cover transplant-related costs.</li>
            <li><strong>Education Campaigns:</strong> Promote awareness through media & materials.</li>
            <li><strong>Women’s Empowerment:</strong> Help women access healthcare & skills.</li>
          </ul>
          <p className="mt-4">
            <strong>How It Works:</strong> Pick a program → Contact us for sponsorship options → Get impact reports and public acknowledgment.
          </p>
        </div>

        {/* In-Kind Donations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🎁 In-Kind Donations</h2>
          <p className="mb-4">
            We gratefully accept non-cash contributions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Medical Supplies: Dialysis kits, BP monitors, PPE, etc.</li>
            <li>Educational Materials: Books, printing, visual aids.</li>
            <li>Event Support: Venues, logistics, banners.</li>
            <li>Professional Services: Legal, medical, or counseling expertise.</li>
          </ul>
          <p className="mt-4">
            <strong>To Donate In-Kind:</strong> Contact us with the details → We’ll guide you through delivery & acknowledgment.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center text-purple-900">
          <p className="text-xl font-medium mb-4">
            💖 Your Support Changes Lives
          </p>
          <p className="mb-6">
            Every rupee makes a difference. Help us make transplants more accessible and ethical.
          </p>
          <a
            
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Donate Now
          </a>
          <p className="mt-4 text-gray-600 text-sm">
            For any queries, please contact us at <a href="mailto:contact@sukatrust.org" className="underline">contact@sukatrust.org</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
