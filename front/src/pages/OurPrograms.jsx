import React from "react";

const Programs = () => {
  window.scroll(0, 0);

  return (
    <section className=" min-h-screen px-6 md:px-20 py-16 relative">
        <br /> <br />
         <div className="absolute top-0 left-4  w-74 h-20 bg-gradient-to-tr from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 right-0 w-20 h-100 bg-gradient-to-bl from-blue-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
          <div className="absolute bottom-0 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute bottom-0 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10 text-center">
          💖 Our Programs
        </h1>

        <p className="text-lg text-black mb-10 text-center max-w-3xl mx-auto">
          At SUKA Charitable Trust, our mission is to develop a streamlined and transparent
          process for approving kidney transplant cases in India, ensuring everything is
          conducted within the legal framework. While we are in the early stages of our journey,
          we are laying the groundwork for impactful programs that will serve our community.
        </p>

        {/* Kidney Health Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🩺 Kidney Health Initiatives</h2>
          <ul className="list-disc pl-6 space-y-3 text-black">
            <li>
              <strong>Awareness Campaigns:</strong> Launching educational campaigns to raise awareness about kidney health, disease preventionand early detection.
            </li>
            <li>
              <strong>Free Screening Camps:</strong> Organizing free kidney health screening camps in underserved areas for early diagnosis and treatment.
            </li>
            <li>
              <strong>Dialysis Support:</strong> Supporting patients undergoing dialysis with treatment guidance and resources.
            </li>
          </ul>
        </div>

        {/* Education & Empowerment */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🎓 Education & Empowerment</h2>
          <ul className="list-disc pl-6 space-y-3 text-black">
            <li>
              <strong>Workshops & Seminars:</strong> Educating patients, families and healthcare professionals about transplants, legal aspects and post-care.
            </li>
            <li>
              <strong>Scholarship Programs:</strong> Supporting students pursuing nephrology and transplant medicine careers.
            </li>
          </ul>
        </div>

        {/* Community Development */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🌱 Community Development</h2>
          <ul className="list-disc pl-6 space-y-3 text-black">
            <li>
              <strong>Women’s Empowerment:</strong> Initiating programs for education, healthcare and skill-building among women.
            </li>
            <li>
              <strong>Livelihood Projects:</strong> Helping patients and families achieve financial stability through community-based projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programs;
