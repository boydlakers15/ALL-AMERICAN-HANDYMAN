import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import './LogoutPage.css'; 
import { FaRegSmile} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LogoutPage() {
  const { t } = useTranslation(); // Use the translation hook
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PRODUCTION_API}/users/me`, { withCredentials: true });
        const { _id } = response.data;
      
  
      updateUserStatus(_id);    
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);


  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(true);
    }, 1000); // 1000 milliseconds delay (adjust the duration as needed)
  };

  const updateUserStatus = async (userId) => {
    try {
      
      const response = await axios.put(
        `${import.meta.env.VITE_PRODUCTION_API}/users/update/${userId}`,
        { status: 'false' }, // we dont know, but it is working for a string
        { withCredentials: true }
      );
     
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await updateUserStatus(userId);
      
      const response = await axios.post(`${import.meta.env.VITE_PRODUCTION_API}/users/logout`, null, {
        withCredentials: true,
      });

      Cookies.remove('token');
      navigate('/');
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="logout-page">
        <div className="video-container">
        <video src={"https://www.facebook.com/frank.corsaro.9/videos/738849550415660/"} autoPlay loop muted />
        </div>
        <div className="logout-content text-overlay">
          <h1>{t('LogoutPage.thankYouMessage')} <FaRegSmile/></h1>
          <button className="logout-button" onClick={handleLogout}>
            {t('LogoutPage.logoutButton')}
          </button>
        </div>
      </div>
    </>
  );
}

export default LogoutPage;
