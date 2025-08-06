import React from "react";

const AboutUs = () => {
  window.scroll(0, 0);

  const advisoryBoard = [
    {
      name: "Mr. S. Saravana Venkatesh",
      title: "Finance & Audit Advisor",
      image: "/Mr. S. Saravana Venkatesh.JPG",
      // description: "Renowned surgeon with 20+ years in kidney transplants.",
    },
    {
      name: "Mr. Shanmugaraj",
      title: "Partnerships & Ground-Level Outreach",
      image: "Mr. Shanmugaraj.JPG",
      // description: "Expert in transplant law & ethical compliance.",
    },
    {
      name: "Rtn. Rajan Arumugam",
      title: "Transplant Survivor Affairs",
      image: "Rajan Arumugam.JPG",
      // description: "Focused on improving healthcare access and quality.",
    },
        {
      name: "Mr. Veera Manikandan",
      title: "Legal & Compliance Advisor",
      image: "Mr. Veera Manikandan.JPG",
      // description: "Focused on improving healthcare access and quality.",
    },
         {
      name: "Mr. Santhosh Kumar",
      title: "Founder",
      image: "Santhosh Kumar.jpg",
      // description: "Focused on improving healthcare access and quality.",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 w-40 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      {/* <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" /> */}

      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-purple-900 mb-4 mt-10">About Us</h2>
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
            <p><strong>S. Santhosh Kumar (Founder):</strong> A passionate advocate for ethical healthcare.</p>
            <p><strong>S. Radha Janani (Co-Founder):</strong> Leading initiatives to raise awareness and support patients.</p>
          </div>

          {/* Advisory Board Static Render */}
          <div className="mt-8">
            <h4 className="font-bold text-lg">Advisory Board:</h4>
            <p className="mb-4">Our advisory board consists of experts guiding our mission:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryBoard.map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200"
                >
                 <img
  src={member.image}
  alt={member.name}
  className="w-40 h-40 mx-auto rounded-full object-cover object-top mb-4"
/>

                  <h5 className="text-xl font-semibold text-purple-800">
                    {member.name}
                  </h5>
                  <p className="text-sm text-gray-700 italic">{member.title}</p>
                  <p className="text-gray-800 mt-2 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners & Collaborators */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Partners & Collaborators</h3>
        <p className="text-black mb-4">We work closely with:</p>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li><strong>Hospitals</strong> – ensuring quality transplant care.</li>
          <li><strong>Government Authorities</strong> – for legal compliance.</li>
          <li><strong>NGOs</strong> – focused on organ donation and support.</li>
          <li><strong>Medical Professionals</strong> – nephrologists and surgeons.</li>
          <li><strong>Community Organizations</strong> – for grassroots outreach.</li>
        </ul>
      </div>

      {/* Annual Reports */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">Annual Reports & Financials</h3>
        <p className="text-black mb-2">We maintain transparency:</p>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li><strong>Annual Reports</strong> – achievements and goals.</li>
          <li><strong>Financials</strong> – income, expenses, donor usage.</li>
          <li><strong>Impact Metrics</strong> – lives helped and awareness raised.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
