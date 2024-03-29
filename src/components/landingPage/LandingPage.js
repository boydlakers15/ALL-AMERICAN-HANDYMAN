import { useTranslation } from 'react-i18next';
import './LandingPage.css';
import videoBg from '../../assets/background.mp4';
import React, { useState } from 'react';
import { FaBolt, FaPaintRoller, FaWrench, FaHammer , FaShower } from 'react-icons/fa';
import { MdConstruction } from 'react-icons/md';
import {GiWashingMachine } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img from '../../img/Frank.jpg';
import companyLogo from '../../img/Frankie_Logo.png';
const LandingPage = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  
  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardClick = (cardIndex) => {
    const services = ['Electricity', 'Heating / AC', 'Painting', 'Plumbing', 'Renovation', 'Pressure Washing', 'Sanitary', 'drywall'];
    const selectedService = services[cardIndex - 1]; // Adjust the index to match the service
    navigate(`/services?service=${selectedService}`);
  };

  return (
    <>
      <div className="landing-page">
        <div className="main">
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted className="landing-page-video" />
          <div className="text-overlay">
            <h1 className="landing-page-title">{t('landingPage.welcome')}</h1>
            <h2 className="landing-page-slogan">{t('landingPage.slogan')}</h2>
            <p
              className="landing-page-description"
              dangerouslySetInnerHTML={{ __html: t('landingPage.description1') }}
            ></p>
            <p
              className="landing-page-description"
              dangerouslySetInnerHTML={{ __html: t('landingPage.description2') }}
            ></p>
            <p
              className="landing-page-description"
              dangerouslySetInnerHTML={{ __html: t('landingPage.description3') }}
            ></p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* Cards */}
      <div className="card-heading">
      <h2 className="card-heading-text">
          {t('landingPage.cardIntro')}
        </h2>
        <h2 className="card-heading-text1">
          {t('landingPage.cardDescription')}
        </h2>
          <div className="card-heading-line"></div>
      </div>
      <section className="card-section">
      <Link
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Electricity' }}
          className={`card card1 ${hoveredCard === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
            <FaBolt className="card-icon" />
            <h3 className="card-title">{t('landingPage.electricityTitle')}</h3>
            {hoveredCard === 1 && <p className="card-info">
              {t('landingPage.electricityDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(1)}>
            {/* Card image */}
          </div>
        </Link>

        <Link
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Heating / AC' }}
          className={`card card2 ${hoveredCard === 2 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FontAwesomeIcon icon={faFire} className="card-icon" />
            <h3 className="card-title">{t('landingPage.heatingACTitle')}</h3>
            {hoveredCard === 2 && <p className="card-info">
              {t('landingPage.heatingACDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(2)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Painting' }} 
          className={`card card3 ${hoveredCard === 3 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(3)} onMouseLeave={() => handleCardHover(null)}
         >
          <div className="card-content">
          <FaPaintRoller className="card-icon" />
            <h3 className="card-title">{t('landingPage.paintingTitle')}</h3>
            {hoveredCard === 3 && <p className="card-info">
              {t('landingPage.paintingDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(3)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Plumbing' }} 
          className={`card card4 ${hoveredCard === 4 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(4)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FaWrench className="card-icon" />
            <h3 className="card-title">{t('landingPage.plumbingTitle')}</h3>
            {hoveredCard === 4 && <p className="card-info">
              {t('landingPage.paintingDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(4)}>
           {/* Card image */}
          </div>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Renovation' }} 
          className={`card card5 ${hoveredCard === 5 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(5)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FaHammer className="card-icon" />
            <h3 className="card-title">{t('landingPage.renovationTitle')}</h3>
            {hoveredCard === 5 && <p className="card-info">
              {t('landingPage.renovationDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(5)}>
            {/* Card image */}
          </div>
        </Link>
        
        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Pressure Washing' }}
          className={`card card6 ${hoveredCard === 6 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(6)} onMouseLeave={() => handleCardHover(null)}
        >
        <div className="card-content">
          <GiWashingMachine className="card-icon" />
          <h3 className="card-title">{t('landingPage.pressureWashingTitle')}</h3>
          {hoveredCard === 6 && <p className="card-info">
          {t('landingPage.pressureWashingDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(6)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Sanitary' }}
          className={`card card7 ${hoveredCard === 7 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(7)} onMouseLeave={() => handleCardHover(null)}
        >
        <div className="card-content">
         <FaShower className="card-icon" />
            <h3 className="card-title">{t('landingPage.sanitaryTitle')}</h3>
            {hoveredCard === 7 && <p className="card-info">
              {t('landingPage.sanitaryDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(7)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to={{ pathname: '/services', search: 'service=Drywall' }}
          className={`card card8 ${hoveredCard === 8 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(8)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <MdConstruction className="card-icon" />
            <h3 className="card-title">{t('landingPage.drywallTitle')}</h3>
            {hoveredCard === 8 && <p className="card-info">
              {t('landingPage.drywallDescription')}<p style={{textDecoration: 'underline', color: 'Red'}}>More info</p></p>}            
          </div>
          <div className="card-image" onClick={() => handleCardClick(8)}>
            {/* Card image */}
          </div>
        </Link>
      </section>
      <hr></hr>
      <section className="bio-section">
        <div className="bio-container">
          <div className="bio-image">
          <center><h2 style={{color: '#002868', fontSize: '44px'}} className="card-title">{t('landingPage.aboutTitle')}</h2></center>
          <div className={`card9 ${hoveredCard === 9 ? 'hovered' : ''}`} onMouseEnter={() => handleCardHover(9)} onMouseLeave={() => handleCardHover(null)}>
          <center><div className="about-img">
            <img src={img} style={{  borderRadius: "5%" }} width="250px" height="150px" alt="Frank Corsaro" className="round-image" />
            <img src={companyLogo} style={{ borderRadius: "5%" }} width="250px" height="150px" alt="Frank Corsaro" className="round-image1" />
            </div> </center>
            <center>
          <div className="arrow-animation">
                <div className="arrow"></div>
              </div>
              <button className="contact-button" type="submit">
                <a href='/contact'>{t('landingPage.quote')}</a>
              </button>
          </center> {hoveredCard === 9 && <p className="card-info1"> {t('landingPage.aboutF')}</p>}
          
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
