import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal data such as your name, email, phone number, address, and donation or volunteer information. We may also collect technical data like your IP address and browser type.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your data to process donations, send updates (if opted in), improve our services, and maintain internal records.",
  },
  {
    title: "3. Sharing and Disclosure",
    content:
      "We never sell or rent your data. We may share it with trusted service providers or if required by law.",
  },
  {
    title: "4. Data Retention",
    content:
      "Your data is retained only as long as necessary or legally required, after which it will be securely deleted.",
  },
  {
    title: "5. Your Rights",
    content:
      "You may request to access, correct, or delete your personal data. Contact us via email to exercise these rights.",
  },
  {
    title: "6. Cookies and Tracking",
    content:
      "We use cookies to improve your browsing experience. You can control cookie settings through your browser.",
  },
  {
    title: "7. Security Measures",
    content:
      "We follow reasonable security measures to protect your personal information from unauthorized access or misuse.",
  },
  {
    title: "8. Children’s Privacy",
    content:
      "We do not knowingly collect data from children under 13. If we find such data, we will delete it immediately.",
  },
  {
    title: "9. Third‑Party Links",
    content:
      "Our website may link to external sites. We are not responsible for their privacy practices or content.",
  },
  {
    title: "10. Updates to This Policy",
    content:
      "We may update this Privacy Policy. Changes will be posted here with a new effective date.",
  },
];

const PrivacyPolicy = () => {
    window.scroll(0,0)
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 ">

             <div className="absolute bottom-0 right-0 w-25 h-60 bg-gradient-to-br from-green-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-25 h-20 bg-gradient-to-br from-blue-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />
<div className="absolute top-0 left-0 w-50 h-150 bg-gradient-to-br from-green-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
<div className="absolute top-0 right-0 w-20 h-40 bg-gradient-to-br from-blue-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
      <h1 className="text-4xl font-bold text-purple-900 text-center mt-20 mb-4">
        Privacy Policy
      </h1>
     

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md border-l-4 border-purple-900 p-5 rounded-md"
          >
            <h2 className="text-lg font-semibold text-purple-900 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              {section.content}
            </p>
          </div>
        ))}

        <div className="bg-white shadow-md border-l-4 border-purple-900 p-5 rounded-md">
          <h2 className="text-lg font-semibold text-purple-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            If you have any questions, please contact us at:
            <br />
            📧{" "}
            <a
              href="mailto:admin@sukacare.org"
              className="text-blue-600 underline"
            >
             admin@sukacare.org
            </a>
            <br />
            🌐{" "}
            <a
              href="https://sukacare.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://sukacare.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
