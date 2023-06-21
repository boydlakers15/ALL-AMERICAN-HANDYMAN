import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import React, { useEffect, useState } from 'react';
import LoginPage from './components/login/LoginPage';
import About from './components/about/About';
import ContactForm from './components/contact/Contact';
import Navbar from './components/nav/Navbar';
import SignupPage from './components/signup/SignupPage';
import LogoutPage from './components/logout/LogoutPage';
import CookiePolicy from './pages/Cookies/CookiePolicy';
import Footer from './components/footer/Footer';
import ServicesPage from './components/services/Services';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

