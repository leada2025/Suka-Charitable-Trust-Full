import React, { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 relative bg-white">
        <br /><br />
      {/* Decorative Background Circles */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
          Terms of Service
        </h1>

        <p className="text-lg text-black mb-8 text-center">
          Welcome! Thank you for visiting our website. We truly appreciate your
          interest in our charitable work, and we aim to serve you with
          integrity, respect, and transparency. By using our website, you kindly
          agree to follow these terms intended to protect all visitors and our
          organization.
        </p>

        {/* Using Our Website */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Using Our Website
          </h2>
          <p>
            We invite you to enjoy and make use of the resources and information
            provided here. If you would like to participate in our programs,
            submit forms, or donate, we ask that you kindly ensure your details
            are accurate and refrain from any prohibited activities.
          </p>
        </section>

        {/* Donations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Donations and Contributions
          </h2>
          <p>
            We gratefully accept your donations to help expand our charitable
            efforts. All contributions are handled with care and respect, and
            are generally considered non-refundable, except in exceptional
            cases. If you have questions about your donation, please contact us
            — we are always happy to assist you.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Intellectual Property
          </h2>
          <p>
            Content on our site (including text, images, and logos) belongs to
            <strong> SUKA Charitable Trust</strong>. Please kindly ask for
            permission before reusing or sharing our materials elsewhere.
          </p>
        </section>

        {/* Respectful Use */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Respectful Use
          </h2>
          <p>
            We kindly request that you use this website respectfully and
            lawfully. Any actions that could harm others or the site (such as
            hacking or spreading false information) are not permitted.
          </p>
        </section>

        {/* Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Privacy
          </h2>
          <p>
            Your privacy is very important to us. For details on how your
            information is treated, please review our{" "}
            <a href="/privacy-policy" className="text-blue-700 underline">
              Privacy Policy
            </a>{" "}
            linked on the website. Please feel free to reach out if anything is
            unclear or you would like more information.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Changes to Terms
          </h2>
          <p>
            We may occasionally update these terms to reflect changes in the law
            or our operations. Any updates will be posted here, and your
            continued use means your kind acceptance of those changes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions, suggestions, or concerns, please{" "}
            <a href="/contact" className="text-blue-700 underline">
              contact our team
            </a>
            . We are grateful for your feedback and are always happy to clarify
            any policies for you.
          </p>
        </section>

        <div className="text-center mt-12 text-purple-900 font-semibold">
          🌐 Thank you for supporting SUKA Charitable Trust. Together, we can
          make a difference.
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
