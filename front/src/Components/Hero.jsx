import React from 'react';
import hero from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">
      {/* Top-left purple gradient */}
      <div className="absolute top-0 left-0 w-74 h-100 bg-gradient-to-br from-blue-600 to-transparent rounded-br-full opacity-50 pointer-events-none z-0" />
      <div className="absolute top-0  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-4  w-74 h-20 bg-gradient-to-br from-green-600 to-transparent rounded-t-full opacity-50 pointer-events-none z-0" />
      {/* Bottom-right purple gradient */}
      <div className="absolute bottom-0 right-0 w-20 h-100 bg-gradient-to-tl from-blue-600 to-transparent rounded-tl-full opacity-50 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-1 max-w-7xl w-full px-6 md:px-10 py-16 md:py-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className=" pl-10 max-w-xl mt-10 md:mt-0 md:-ml-10" data-aos="fade-right">
            <h3 className="text-5xl font-bold text-purple-900 mb-2 font-monts">
              Giving Hope, Saving Lives:
            </h3>
            <p className="text-black mb-6">
              At SUKA Charitable Trust, we are dedicated to creating a safe, transparent and efficient ecosystem for kidney transplant processes in India. Founded by S. Santhosh Kumar and S. Radha Janani in Coimbatore, Tamil Nadu, our mission is to ensure that life-saving kidney transplants are conducted ethically, legally, and efficiently, providing hope to those in need.
            </p>
      

<Link
  to="/get-involved"
  className="inline-flex items-center bg-purple-900 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
>
  Explore it <span className="ml-2">→</span>
</Link>

          </div> <br />

          {/* Image */}
          <div className="mb-8 md:mb-0" data-aos="flip-left">
            <img
              src={hero}
              alt="Kidney Awareness"
              className="w-[350px] rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
