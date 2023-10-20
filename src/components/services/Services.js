import React, { useState, useEffect } from 'react';
import './ServicesPage.css';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState('Electricity');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <h1 style={{fontSize: '44px'}}className="service-title page-title__overlay">{t(selectedService)}</h1>
      <div className="sidebar">
        <ul>
          <li onClick={() => handleServiceClick('Electricity')}>{t('servicesPage.electricity')}</li>
          <li onClick={() => handleServiceClick('Heating / AC')}>{t('servicesPage.heatingAC')}</li>
          <li onClick={() => handleServiceClick('Painting')}>{t('servicesPage.painting')}</li>
          <li onClick={() => handleServiceClick('Plumbing')}>{t('servicesPage.plumbing')}</li>
          <li onClick={() => handleServiceClick('Renovation')}>{t('servicesPage.renovation')}</li>
          <li onClick={() => handleServiceClick('Pressure Washing')}>{t('servicesPage.pressureWashing')}</li>
          <li onClick={() => handleServiceClick('Sanitary')}>{t('servicesPage.sanitary')}</li>
          <li onClick={() => handleServiceClick('Drywall')}>{t('servicesPage.drywall')}</li>
        </ul>
      </div>
      <div className="service-info">
        {selectedService === 'Electricity' && (
          <>
         
            
            <h2>{t('servicesPage.electricalServices')}</h2>
            <p>{t('servicesPage.electricityDescription1')}</p>
            <p>{t('servicesPage.electricityDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.electricalPanelUpgrade')}</td>
                  <td>$85</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.ceilingFanInstallation')}</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.ceilingFanRepair')}</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.bathFanRepair')}</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.switchInstallation')}</td>
                  <td>$25</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Heating / AC')}>{t('servicesPage.nextHeatingAC')}</button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Drywall')}>
                    {t('servicesPage.backDrywall')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Heating / AC' && (
          <>
            <h2>{t('servicesPage.centralHeatingAC')}</h2>
            <p>{t('servicesPage.centralHeatingACDescription1')}</p>
            <p>{t('servicesPage.centralHeatingACDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.heatingSystemInstallation')}</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.heatingSystemRepair')}</td>
                  <td>$85</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.heatingSystemMaintenance')}</td>
                  <td>$65</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.thermostatInstallation')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.airConditioningSystemInstallation')}</td>
                  <td>$120</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.airConditioningSystemRepair')}</td>
                  <td>$95</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.airConditioningSystemMaintenance')}</td>
                  <td>$75</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.thermostatInstallation')}</td>
                  <td>$50</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Painting')}>{t('servicesPage.nextPainting')}</button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Electricity')}>
                    {t('servicesPage.backElectricity')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Painting' && (
          <>
            <h2>{t('servicesPage.paintingServices')}</h2>
            <p>{t('servicesPage.paintingDescription1')}</p>
            <p>{t('servicesPage.paintingDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.paintingWalls')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.paintingCeilings')}</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.exteriorPainting')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.paintingDoors')}</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.paintingCabinets')}</td>
                  <td>$70</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Plumbing')}>{t('servicesPage.nextPlumbing')}</button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Heating / AC')}>
                    {t('servicesPage.backHeatingAC')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Plumbing' && (
          <>
            <h2>{t('servicesPage.plumbingServices')}</h2>
            <p>{t('servicesPage.plumbingDescription1')}</p>
            <p>{t('servicesPage.plumbingDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.leakRepairs')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.pipeInstallation')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.drainCleaning')}</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.toiletRepair')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.fixtureInstallation')}</td>
                  <td>$40</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Renovation')}>{t('servicesPage.nextRenovation')}</button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Painting')}>
                    {t('servicesPage.backPainting')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Renovation' && (
          <>
            <h2>{t('servicesPage.homeRenovationServices')}</h2>
            <p>{t('servicesPage.renovationDescription1')}</p>
            <p>{t('servicesPage.renovationDescription2')}</p>
            <ul>
              <li>{t('servicesPage.interiorExteriorPainting')}</li>
              <li>{t('servicesPage.flooringInstallationRepair')}</li>
              <li>{t('servicesPage.kitchenBathroomRemodeling')}</li>
              <li>{t('servicesPage.windowDoorReplacement')}</li>
              <li>{t('servicesPage.roofRepairInstallation')}</li>
              <li>{t('servicesPage.cabinetInstallation')}</li>
              <li>{t('servicesPage.deckPatioConstruction')}</li>
              <li>{t('servicesPage.lightingFixtureUpgrades')}</li>
              <li>{t('servicesPage.plumbingElectricalUpgrades')}</li>
            </ul>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.interiorPainting')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.flooringInstallation')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.kitchenRemodeling')}</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.bathroomRemodeling')}</td>
                  <td>$90</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.windowReplacement')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.cabinetInstallation')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.deckConstruction')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.lightingFixtureUpgrades')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.plumbingElectricalUpgrades')}</td>
                  <td>$60</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Pressure Washing')}>{t('servicesPage.nextPressureWashing')}</button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Plumbing')}>
                    {t('servicesPage.backPlumbing')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Pressure Washing' && (
          <>
            <h2>{t('servicesPage.homeServices')}</h2>
            <p>{t('servicesPage.pressureWashingDescription1')}</p>
            <p>{t('servicesPage.pressureWashingDescription2')}</p>
            <p>{t('servicesPage.pressureWashingDescription3')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.drivewayPressureWashing')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.sidewalkPressureWashing')}</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.deckPressureWashing')}</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.sidingPressureWashing')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.fencePressureWashing')}</td>
                  <td>$45</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Sanitary')}>
                    {t('servicesPage.nextSanitary')}
                </button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Renovation')}>
                    {t('servicesPage.backRenovation')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Sanitary' && (
          <>
            <h2>{t('servicesPage.sanitaryServices')}</h2>
            <p>{t('servicesPage.sanitaryDescription1')}</p>
            <p>{t('servicesPage.sanitaryDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.sewerLineCleaning')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.pipeInstallation')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.drainCleaning')}</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.toiletRepair')}</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.leakRepairs')}</td>
                  <td>$40</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => handleServiceClick('Drywall')}>
                    {t('servicesPage.nextDrywall')}
                </button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Pressure Washing')}>
                    {t('servicesPage.backPressureWashing')}
                </button>
            </div>
          </>
        )}

        {selectedService === 'Drywall' && (
          <>
            <h2>{t('servicesPage.drywallServices')}</h2>
            <p>{t('servicesPage.drywallDescription1')}</p>
            <p>{t('servicesPage.drywallDescription2')}</p>
            <h2>{t('servicesPage.galleryTitle')}</h2>
            <div className="gallery">
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
                
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />&nbsp;
              <img
                src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_01-600x450.jpg"
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2>{t('servicesPage.workTypesPrices')}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t('servicesPage.workType')}</th>
                  <th>{t('servicesPage.pricePerHour')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('servicesPage.drywallInstallation')}</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.drywallRepair')}</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.drywallFinishing')}</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>{t('servicesPage.drywallTexturing')}</td>
                  <td>$50</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Electricity')}>
                    {t('servicesPage.nextElectricity')}
                </button>
                <span style={{ margin: '0 10px' }}>|</span>
                <button className='BackBtnSan' onClick={() => handleServiceClick('Sanitary')}>
                    {t('servicesPage.backSanitary')}
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
