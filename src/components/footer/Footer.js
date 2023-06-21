import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import companyLogo1 from '../../img/Frankie_Logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-bottom">
      <img src={companyLogo1} alt="Company Logo" className="logo1" />
      <div className="footer-vertical-line"></div>
        <div className="social-icons">
          <a href="https://www.facebook.com/handyman2334"><FaFacebook /></a>
          <a href="https://www.instagram.com/"><FaTwitter /></a>
          <a href="https://twitter.com"><FaInstagram /></a>
          <a href="https://www.youtube.com/"><FaYoutube /></a>
          <a href="https://www.tiktok.com/"><FaTiktok /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </div>
        <div className="footer-section"></div>
        <div className="footer-vertical-line"></div>
        <div className="footer-horizontal-line"></div>
        <div className="footer-copyright">
          <p>&copy;{t('footer.copyright')}</p>
        </div>
        <div className="footer-vertical-line"></div>
        <div className="footer-cookiepolicy">
          <Link style={{color: 'white'}} className="footer-cookiepolicy1" to="/cookiepolicy">{t('footer.cookiePolicy')}</Link>
          <br />
          
        </div>
       </div>
    </footer>
  );
};

export default Footer;
