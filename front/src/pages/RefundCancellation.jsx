import React, { useEffect } from "react";

const RefundCancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 relative bg-white">
      {/* Decorative Background Circles */} <br /><br />
      <div className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
          Refund and Cancellation Policy
        </h1>

        <p className="text-lg text-black mb-8 text-center">
          We sincerely appreciate the generosity of all our donors and
          supporters. Please read our refund and cancellation policy carefully.
        </p>

        {/* Donations are Final */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Non-Refundable Donations
          </h2>
          <p>
            Please note that all donations made to{" "}
            <strong>SUKA Charitable Trust</strong> are final and non-refundable,
            as these contributions are immediately used to support our ongoing
            charitable programs and community initiatives. We kindly ask donors
            to consider their contributions carefully before making a donation.
          </p>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Cancellation of Donations
          </h2>
          <p>
            Cancellation of donations is not applicable once the donation
            process is complete. If you have any questions or need assistance
            prior to donating, please do not hesitate to reach out to us. We are
            always happy to help clarify any concerns or provide additional
            information.
          </p>
        </section>

        {/* Closing */}
        <div className="text-center mt-12 text-purple-900 font-semibold">
          🙏 Thank you for understanding and supporting our mission to make a
          positive impact.
        </div>
      </div>
    </section>
  );
};

export default RefundCancellationPolicy;
