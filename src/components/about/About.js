import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title opening-hours-title">{t('about.title')}</h1>

        <section className="about-section">
          <p className="about-description" dangerouslySetInnerHTML={{ __html: t('about.description1') }}></p>
          <p className="about-description">{t('about.description2')}</p>
          <p className="about-description">{t('about.description3')}</p>
          <p className="about-description">{t('about.description4')}</p>
        </section>

        <section className="reviews-section">
          <h2 className="opening-hours-title">{t('about.testimonials')}</h2>
          <div className="reviews">
            <div className="review-card">
            <div className="facebook-post">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaci.chaney%2Fposts%2Fpfbid0369K99f1HTdsNxJ6TUsMZpqaJQUw1mSfWr8FJ6EwwmUkZ3Po2CGubUDy5JnPDodaql&show_text=true&width=500" width="500" height="850" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            </div>
            <div className="review-card">
            <div className="facebook-post">
              <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjmcgnns%2Fposts%2Fpfbid02nWT8NEX2WnAqiEEzpSjaxJmiXAGUZ659THzLLkFchSEoAr4eQz7iXrrGnzUdLzcZl&show_text=true&width=500" width="500" height="753" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            </div>
            <div className="review-card">
              <div className="facebook-post">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftamarajohnson529%2Fposts%2Fpfbid0q9g3uoJzSn7ZjKBShnbzxdNK6fucjnYuNPowfPWd5N5WUryvadoG229xxCpjNnoKl&show_text=true&width=500" width="500" height="247" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
            </div>
            
            <div className="review-card">
              <div className="facebook-post">
              <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faeskelund%2Fposts%2Fpfbid02dycxKBTHudwdoRuiKN6RBetFJKH3EmKio5S4EWPs9pScSjgvJ2TKA8fQe1Yj7mkcl&show_text=true&width=500" width="500" height="266" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="opening-hours-section">
          <h2 className="opening-hours-title">{t('about.openingHours')}</h2>
          <center>
          <table className="opening-hours-table">
            <tbody>
              <tr>
                <td style={{color: 'white'}}>{t('about.monThu')}&nbsp;:&nbsp;</td>
                <td><p style={{color: 'white'}}>8am - 7pm</p></td>
              </tr>
              &nbsp;
              <tr>
                <td style={{color: 'white'}}>{t('about.friSat')}&nbsp;:&nbsp;&nbsp;&nbsp;</td>
                <td style={{color: 'white'}}><p>8am - 4pm</p></td>
              </tr>
              &nbsp;
              <tr>
                <td style={{color: 'white'}}>{t('about.sunday')}&nbsp;:</td>
                <td style={{color: 'white'}}>{t('about.closed')}</td>
              </tr>
            </tbody>
          </table>
          </center>
        </section>
      </div>
    </div>
  );
};

export default About;
