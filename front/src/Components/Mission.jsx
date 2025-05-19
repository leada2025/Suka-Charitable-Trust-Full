import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import missionImg from "../assets/mission.jpeg";
import visionImg from "../assets/vision.png";

const MissionVision = () => {
  const [showMission, setShowMission] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMission(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const content = showMission
    ? {
        title: "Our Mission",
        description: (
          <>
            <p className="mb-4">We strive to:</p>
            <ul className="list-disc list-inside text-black space-y-1">
              <li><strong>Simplify the Transplant Process:</strong> Identifying and eliminating bottlenecks in the kidney transplant approval process.</li>
              <li><strong>Promote Legal Compliance:</strong> Ensuring all transplants are conducted within the legal framework of India.</li>
              <li><strong>Enhance Awareness:</strong> Educating the public, patients and families about kidney health, transplantation and the legal aspects of donation.</li>
              <li><strong>Patient Support:</strong> Offering guidance, emotional support and resources to kidney patients and their families.</li>
              <li><strong>Collaborate with Stakeholders:</strong> Working closely with hospitals, government authorities, NGOs and healthcare professionals to streamline transplant procedures.</li>
            </ul>
          </>
        ),
        image: missionImg,
      }
    : {
        title: "Our Vision",
        description:
          "To build a streamlined and transparent system for kidney transplants in India, where patients receive timely, ethical, and legally compliant support, empowering them with the knowledge and access they need for a successful transplant journey.",
        image: visionImg,
      };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-3 md:px-20 py-16 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mt-10">
         <div className="absolute top-0 left-4  w-74 h-20 bg-gradient-to-tr from-green-600 to-transparent rounded-b-full opacity-50 pointer-events-none z-0" />
         <div className="absolute top-0 right-0 w-20 h-100 bg-gradient-to-bl from-blue-600 to-transparent rounded-bl-full opacity-50 pointer-events-none z-0" />
          <div className="absolute bottom-0 left-50 w-20 h-20 bg-gradient-to-bl from-blue-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute bottom-0 right-50 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0" />
           <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-bl from-green-600 to-transparent rounded-full opacity-50 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2" />

        <AnimatePresence mode="wait">
          <motion.div
            key={content.title}
            className="flex flex-col md:flex-row items-center justify-between w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Text Content */}
            <div className="flex flex-row items-start md:items-center mb-8 md:mb-0 md:mr-8 ml-2">
              <div className="max-w-xl text-black ml-10">
                 <h3 className="text-5xl font-bold text-purple-900 mb-5">{content.title}:</h3>
                <p className="text-lg"   data-aos="flip-down">{content.description}</p>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src={content.image}
                alt={content.title}
                className="w-[400px] rounded"
                data-aos="flip-up"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVision;
