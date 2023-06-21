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
           Intro
          </h2>
          <h2 className="card-heading-text1">
          Drywall, Painting, Power Washing, Plumbing & much more.
          </h2>
          <div className="card-heading-line"></div>
      </div>
      <section className="card-section">
      <Link
          to={{ pathname: '/services', search: 'service=Electricity' }}
          className={`card card1 ${hoveredCard === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
            <FaBolt className="card-icon" />
            <h3 className="card-title">Electricity</h3>
            {hoveredCard === 1 && <p className="card-info">Illuminate your space and empower your home with our top-notch electrical solutions.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(1)}>
            {/* Card image */}
          </div>
        </Link>

        <Link
          to={{ pathname: '/services', search: 'service=Heating / AC' }}
          className={`card card2 ${hoveredCard === 2 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FontAwesomeIcon icon={faFire} className="card-icon" />
            <h3 className="card-title">Heating & AC</h3>
            {hoveredCard === 2 && <p className="card-info">Experience optimal temperature control and year-round comfort with our reliable heating and air conditioning services that keep you cozy in winter and cool in summer.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(2)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          to={{ pathname: '/services', search: 'service=Painting' }} 
          className={`card card3 ${hoveredCard === 3 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(3)} onMouseLeave={() => handleCardHover(null)}
         >
          <div className="card-content">
          <FaPaintRoller className="card-icon" />
            <h3 className="card-title">Painting</h3>
            {hoveredCard === 3 && <p className="card-info">Transform your living space with a splash of color and professional painting craftsmanship.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(3)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          to={{ pathname: '/services', search: 'service=Plumbing' }} 
          className={`card card4 ${hoveredCard === 4 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(4)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FaWrench className="card-icon" />
            <h3 className="card-title">Plumbing</h3>
            {hoveredCard === 4 && <p className="card-info">From leaks to clogs, our skilled plumbers provide efficient solutions to keep your pipes flowing smoothly.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(4)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          to={{ pathname: '/services', search: 'service=Plumbing' }} 
          className={`card card5 ${hoveredCard === 5 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(5)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <FaHammer className="card-icon" />
            <h3 className="card-title">Renovation</h3>
            {hoveredCard === 5 && <p className="card-info">Turn your house into your dream home with our expert renovation services that breathe new life into your space.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(5)}>
            {/* Card image */}
          </div>
        </Link>
        
        <Link 
          to={{ pathname: '/services', search: 'service=Pressure Washing' }}
          className={`card card6 ${hoveredCard === 6 ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(6)} onMouseLeave={() => handleCardHover(null)}
        >
        <div className="card-content">
          <GiWashingMachine className="card-icon" />
          <h3 className="card-title">Pressure Washing</h3>
          {hoveredCard === 6 && <p className="card-info">
            Transform your outdoor spaces with our professional pressure washing services. We utilize advanced techniques and equipment to eliminate dirt, grime, and stains from driveways, sidewalks, decks, siding, and more, leaving your property looking clean, fresh, and rejuvenated.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(6)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          to={{ pathname: '/services', search: 'service=Sanitary' }}
          className={`card card7 ${hoveredCard === 7 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(7)} onMouseLeave={() => handleCardHover(null)}
        >
        <div className="card-content">
         <FaShower className="card-icon" />
            <h3 className="card-title">Sanitary</h3>
            {hoveredCard === 7 && <p className="card-info">Maintain a clean and hygienic environment with our sanitary solutions that prioritize your health and well-being.</p>}
          </div>
          <div className="card-image" onClick={() => handleCardClick(7)}>
            {/* Card image */}
          </div>
        </Link>

        <Link 
          to={{ pathname: '/services', search: 'service=Drywall' }}
          className={`card card8 ${hoveredCard === 8 ? 'hovered' : ''}`} 
          onMouseEnter={() => handleCardHover(8)} onMouseLeave={() => handleCardHover(null)}
        >
          <div className="card-content">
          <MdConstruction className="card-icon" />
            <h3 className="card-title">Drywall</h3>
            {hoveredCard === 8 && <p className="card-info">Keep your space looking pristine with our professional drywall services. Whether it's repairing damaged walls or installing new drywall, our team has the expertise to handle all your drywall needs. We ensure high-quality workmanship and a seamless finish for a beautiful and durable result.</p>}
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
          <center><h2 className="card-title">About Frank Corsaro</h2></center>
          <div className={`card9 ${hoveredCard === 9 ? 'hovered' : ''}`} onMouseEnter={() => handleCardHover(9)} onMouseLeave={() => handleCardHover(null)}>
          <div className="card-content">
            <img src="https://scontent.ffra1-1.fna.fbcdn.net/v/t39.30808-6/293805990_1719105535122419_4252368272203949092_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fWsfEtN6pv8AX_mS_Vv&_nc_ht=scontent.ffra1-1.fna&oh=00_AfCY5b-vWtIWTtFBjA3--qeyAMErG_GWBSQbTL1mu_feAA&oe=64961599" style={{  borderRadius: "5%" }} width="250px" height="150px" alt="Frank Corsaro" className="round-image" />
            <img src="https://scontent.ffra1-1.fna.fbcdn.net/v/t1.18169-9/21106501_475281199531767_586054819397179208_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FMQbOUSKBukAX-4RH0S&_nc_ht=scontent.ffra1-1.fna&oh=00_AfBhjPWp9m6zuqnyr-jzCuJl3KW2FgumpkQT-ssFlLktfg&oe=64BA14F3" style={{ borderRadius: "5%" }} width="250px" height="150px" alt="Frank Corsaro" className="round-image1" />
            <center>
          <div className="arrow-animation">
                <div className="arrow"></div>
              </div>
              <button className="contact-button" type="submit">
                <a href='/contact'>Get a Quote</a>
              </button>
          </center> {hoveredCard === 9 && <p className="card-info1"> Frank Corsaro is an exceptional individual known for his unwavering dedication to helping others and ensuring the utmost care for his customers. With a strong sense of responsibility and a genuine passion for service, he consistently goes above and beyond to meet the needs of those around him.
                Not only is Frank Corsaro committed to his professional endeavors, but he is also a dedicated family man who deeply values his loved ones. His profound love and devotion to his family are evident in the way he cherishes every moment spent with them. He understands the importance of strong familial bonds and actively nurtures these relationships with love, respect, and support.
                In addition to his commitment to his family, Frank Corsaro holds a deep love for his country. He recognizes the value of patriotism and the significance of contributing to the betterment of his nation. Whether through his business practices or involvement in community initiatives, he consistently demonstrates a genuine desire to make a positive impact on his country and its citizens.
                Frank Corsaro's exceptional dedication to helping others, his unwavering commitment to his customers, and his profound love for his family and country truly make him a remarkable individual. His actions and values serve as an inspiration to others, reflecting the importance of kindness, compassion, and an unwavering sense of responsibility in both personal and professional life.</p>}
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;