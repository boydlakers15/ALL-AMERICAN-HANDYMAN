import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import companyLogo from '../../img/Frankie_Logo.png';
import Cookies from 'js-cookie';
import axios from 'axios';
import LanguageSwitcher from '../Language/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PRODUCTION_API}/users/me`, { withCredentials: true });
        const { _id, status, isAdmin } = response.data;

        setIsAdmin(isAdmin);
        setIsLoggedIn(status);
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      }
    };

    fetchUserData();
  }, [isLoggedIn]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand navbar-links">
          <Link to="/">
            <div className="logo-container ">
              <img src={companyLogo} alt="Company Logo" className="logo" />
            </div>
          </Link>
        </div>
        <div className="dropdown-container ">
            <span className={`dropdown-trigger ${isDropdownOpen ? 'hide-label' : ''}`} onClick={toggleDropdown}>
              All American Handyman
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu navbar-links">
                <Link to="/" className="dropdown-option" onClick={closeDropdown}>
                  {t('navbar.home')}
                </Link>
                <Link to="/about" className="dropdown-option" onClick={closeDropdown}>
                  {t('navbar.about')}
                </Link>
                <Link to="/contact" className="dropdown-option" onClick={closeDropdown}>
                  {t('navbar.contact')}
                </Link>
                {isLoggedIn ? (
                  <>
                    {isAdmin ? (
                      <>
                        <Link to="/profile" className="dropdown-option" onClick={closeDropdown}>
                          {t('navbar.profile')}
                        </Link>
                        <Link to="/work" className="dropdown-option" onClick={closeDropdown}>
                          {t('navbar.work')}
                        </Link>
                        <Link to="/admin" className="dropdown-option" onClick={closeDropdown}>
                          {t('navbar.admin')}
                        </Link>
                      </>
                    ) : (
                      <Link to="/profile" className="dropdown-option" onClick={closeDropdown}>
                        {t('navbar.profile')}
                      </Link>
                    )}
                    <Link to="/logout" className="dropdown-option" onClick={closeDropdown}>
                      {t('navbar.logout')}
                    </Link>
                  </>
                ) : (
                  <Link to="/login" className="dropdown-option" onClick={closeDropdown}>
                    {t('navbar.login')}
                  </Link>
                )}
              </div>
              
            )}
              
          </div>
        <div className="">
        <LanguageSwitcher className="language-switcher " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
