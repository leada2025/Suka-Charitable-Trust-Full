import React from "react";

const Resources = () => {
  window.scroll(0, 0);

  return (
    
     <section className=" min-h-screen px-6 md:px-20 py-16 relative">
        <br /> <br />
       <div className="absolute bottom-0 right-0 w-25 h-60 bg-gradient-to-br from-green-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-25 h-20 bg-gradient-to-br from-blue-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
<div className="absolute top-0 left-0 w-50 h-150 bg-gradient-to-br from-green-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
<div className="absolute top-0 right-0 w-20 h-40 bg-gradient-to-br from-blue-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
        
      <div className="mx-auto ">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
           
          📚 Resources - SUKA Charitable Trust
        </h1>
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <p className="text-lg text-black mb-12 text-center max-w-3xl mx-auto">
          At SUKA Charitable Trust, we believe knowledge is a powerful tool in the fight against kidney disease. Explore our library of materials designed to support patients, caregivers and professionals alike.
        </p>

        {/* Educational Materials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">📘 Educational Materials</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Kidney Health Basics:</strong> Guides on kidney function, common diseases and prevention tips.</li>
            <li><strong>Understanding Kidney Transplants:</strong> A step-by-step breakdown of the transplant process.</li>
            <li><strong>Patient Stories:</strong> Inspiring real-life journeys of transplant recipients.</li>
            <li><strong>Legal Aspects of Transplants:</strong> Information on India's transplant laws and ethical compliance.</li>
            <li><strong>Infographics and Videos:</strong> Visual aids that simplify complex medical topics.</li>
          </ul>
        </section>

        {/* Health Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">🩺 Health Guides</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Kidney-Friendly Diet Plans:</strong> Nutrition tips and recipes for kidney health.</li>
            <li><strong>Medication Management:</strong> Safe practices for commonly prescribed medicines.</li>
            <li><strong>Pre-Transplant Preparation:</strong> Mental, physical and financial preparation guides.</li>
            <li><strong>Post-Transplant Care:</strong> Tips on recovery, check-ups and lifestyle changes.</li>
          </ul>
        </section>

        {/* Research Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">📊 Research Publications</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Current Research in Kidney Health:</strong> Latest studies and discoveries.</li>
            <li><strong>Transplant Statistics and Insights:</strong> Data and trends from across India.</li>
            <li><strong>Collaborative Research Initiatives:</strong> Joint efforts with hospitals and universities.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">❓ FAQs</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">1. What is kidney disease?</p>
              <p>Kidney disease occurs when kidneys can't filter blood properly. It may require dialysis or transplant in severe cases.</p>
            </div>
            <div>
              <p className="font-semibold">2. Who is eligible for a kidney transplant?</p>
              <p>Patients with end-stage renal disease (ESRD) and a compatible donor may be eligible after medical evaluation.</p>
            </div>
            <div>
              <p className="font-semibold">3. How can I become a kidney donor?</p>
              <p>You can become a living donor for someone you know, or register for deceased donation with proper legal guidance.</p>
            </div>
            <div>
              <p className="font-semibold">4. What is the legal process for a kidney transplant in India?</p>
              <p>Governed by the Transplantation of Human Organs and Tissues Act (THOTA), requiring evaluation and committee approval.</p>
            </div>
            <div>
              <p className="font-semibold">5. How can SUKA Charitable Trust help me?</p>
              <p>We provide awareness, screening, transplant guidance and post-operative care resources to support your journey.</p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-purple-900 mt-10">
          🌐 We are constantly updating this section. For questions or personalized guidance, please <a href="/contact" className="text-blue-800 underline hover:text-blue-600">contact us</a>.
        </div>
      </div>
    </section>
  );
};

export default Resources;
