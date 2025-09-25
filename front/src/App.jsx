import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Homepage from './Components/Homepage';
import AboutUs from './pages/AboutUs';
import Navbar from './Components/Navbar';
import Programs from './pages/OurPrograms';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import NewsMediaPage from './pages/NewsAndMedia';
import ContactUsPage from './pages/ContactUs';
import Footer from './Components/Footer';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsService';
import RefundCancellationPolicy from './pages/RefundCancellation';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news" element={<NewsMediaPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
         <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
         <Route path="/refund" element={<RefundCancellationPolicy />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
