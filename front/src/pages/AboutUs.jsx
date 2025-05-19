import React from 'react';


const AboutUs = () => {
  window.scroll(0, 0);

   
  return (
    
    <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Heading */} <br /> <br />
       <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 w-40 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      {/* Bottom-right purple gradient */}
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
       <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-purple-900 mb-4">About Us</h2>
        <p className="text-lg text-purple-900">SUKA Charitable Trust</p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Our Story</h3>
        <p className="text-black leading-relaxed">
          SUKA Charitable Trust was founded by <strong>S. Santhosh Kumar</strong> and <strong>S. Radha Janani</strong> in Coimbatore, Tamil Nadu, with a vision to transform the landscape of kidney transplantation in India. Recognizing the challenges faced by patients and their families in navigating the complex transplant process, our founders set out to create a transparent, ethical, and legally compliant support system. <strong>SUKA</strong> (Safe Universe Knowledge and Action) stands as a beacon of hope, providing education, support and guidance to ensure that life-saving kidney transplants are accessible to those in need.
        </p>
      </div>

      {/* Board & Leadership */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Board & Leadership</h3>
        <p className="mb-6 text-black">
          SUKA Charitable Trust is led by a dedicated team of compassionate leaders with a shared commitment to saving lives through ethical healthcare practices.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-lg">Founders:</h4>
            <p><strong>S. Santhosh Kumar (Founder):</strong> A passionate advocate for ethical healthcare, bringing years of experience in patient advocacy to ensure transparency and legality in transplants.</p>
            <p><strong>S. Radha Janani (Co-Founder):</strong> A strong proponent of patient rights and education, leading initiatives to raise awareness and provide support to kidney patients and families.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mt-4">Advisory Board:</h4>
            <p>Includes experienced healthcare professionals, legal experts, and patient advocates who guide our initiatives and ensure adherence to ethical practices.</p>
          </div>
        </div>
      </div>

      {/* Partners & Collaborators */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Partners & Collaborators</h3>
        <p className="text-black mb-4">SUKA Charitable Trust believes in the power of collaboration to achieve meaningful impact. We work closely with:</p>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li><strong>Hospitals and Healthcare Providers:</strong> Streamlining transplant processes and ensuring quality patient care.</li>
          <li><strong>Government Authorities:</strong> Ensuring compliance with legal regulations through active collaboration.</li>
          <li><strong>Non-Governmental Organizations (NGOs):</strong> Focused on healthcare, organ donation and patient support.</li>
          <li><strong>Medical Professionals:</strong> Nephrologists, transplant surgeons and healthcare workers for expert patient guidance.</li>
          <li><strong>Community Organizations:</strong> Conducting awareness campaigns and health camps at the grassroots level.</li>
        </ul>
      </div>

      {/* Annual Reports & Financials */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Annual Reports & Financials</h3>
        <p className="text-black mb-2">
          Transparency is at the heart of SUKA Charitable Trust. We maintain the highest standards of accountability across our operations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li><strong>Annual Reports:</strong> Highlighting achievements, challenges and future goals.</li>
          <li><strong>Financial Statements:</strong> Detailed views of income, expenses and donor fund usage.</li>
          <li><strong>Impact Metrics:</strong> Showcasing lives impacted, patients supported and awareness generated.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
