import React from "react";

const AboutUs = () => {
  window.scroll(0, 0);

  const advisoryBoard = [
    {
      name: "Mr. S. Saravana Venkatesh",
      title: "Finance & Audit Advisor",
      image: "/Mr. S. Saravana Venkatesh.JPG",
    },
    {
      name: "Mr. Shanmugaraj",
      title: "Partnerships & Ground-Level Outreach",
      image: "Mr. Shanmugaraj.JPG",
    },
    {
      name: "Rtn. Rajan Arumugam",
      title: "Transplant Survivor Affairs",
      image: "Rajan Arumugam.JPG",
    },
    {
      name: "Mr. Veera Manikandan",
      title: "Legal & Compliance Advisor",
      image: "Mr. Veera Manikandan.JPG",
    },
      {
      name: "Dr. Khaja Moinudeen ",
      title: "Medical Advisor",
      image: "Dr. Khaja Moinudeen.JPG",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-20 py-16 mx-auto relative">
      {/* Heading */} <div className="absolute top-50 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-50 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute bottom-0 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute bottom-0 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

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

        <h4 className="font-bold text-lg mb-4">Founders:</h4>
        <div className="space-y-4 mb-8">
          <p >
            <strong className="text-purple-800">S. Santhosh Kumar</strong> – A passionate advocate for ethical healthcare, Santhosh Kumar founded SUKA to bring transparency and support to kidney transplant patients across India.
          </p>
          <p>
            <strong className="text-purple-800">S. Radha Janani</strong> – A driven leader committed to raising awareness and empowering families navigating organ transplantation.
          </p>
        </div>

        {/* Advisory Board */}
        {/* Advisory Board */}
<div className="mt-8">
  <h4 className="font-bold text-lg">Advisory Board:</h4>
  <p className="mb-4">Our advisory board consists of experts guiding our mission:</p>

  {/* First row - 3 members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mb-6">
    {advisoryBoard.slice(0, 3).map((member, index) => (
      <div
        key={index}
        className="text-center"
        data-aos="zoom-in"
        data-aos-delay={index * 150}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover object-top mb-4"
        />
        <h5 className="text-xl font-semibold text-purple-800">{member.name}</h5>
        <p className="text-sm text-gray-700 italic">{member.title}</p>
      </div>
    ))}
  </div>

  {/* Second row - 2 members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex  justify-items-center">
    {advisoryBoard.slice(3, 5).map((member, index) => (
      <div
        key={index + 3} // Important: Use different keys than first row
        className="text-center"
        data-aos="zoom-in"
        data-aos-delay={(index + 3) * 150}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover object-top mb-4"
        />
        <h5 className="text-xl font-semibold text-purple-800">{member.name}</h5>
        <p className="text-sm text-gray-700 italic">{member.title}</p>
      </div>
    ))}
  </div>

          {/* Separate row for 4th member */}
          {/* <div className="flex justify-center mt-6">
            <div
              className="text-center"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >
              <img
                src={advisoryBoard[3].image}
                alt={advisoryBoard[3].name}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover object-top mb-4"
              />
              <h5 className="text-xl font-semibold text-purple-800">{advisoryBoard[3].name}</h5>
              <p className="text-sm text-gray-700 italic">{advisoryBoard[3].title}</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Partners */}
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
