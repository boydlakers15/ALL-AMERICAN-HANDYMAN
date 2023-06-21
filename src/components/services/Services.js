import React, { useState, useEffect } from 'react';
import './ServicesPage.css';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
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
        <h1 className="service-title page-title__overlay">{selectedService}</h1>
      <div className="sidebar">
        <ul>
          <li onClick={() => handleServiceClick('Electricity')}>Electricity</li>
          <li onClick={() => handleServiceClick('Heating / AC')}>Heating / AC</li>
          <li onClick={() => handleServiceClick('Painting')}>Painting</li>
          <li onClick={() => handleServiceClick('Plumbing')}>Plumbing</li>
          <li onClick={() => handleServiceClick('Renovation')}>Renovation</li>
          <li onClick={() => handleServiceClick('Pressure Washing')}>Pressure Washing</li>
          <li onClick={() => handleServiceClick('Sanitary')}>Sanitary</li>
          <li onClick={() => handleServiceClick('Drywall')}>Drywall</li>
        </ul>
      </div>
      <div className="service-info">
      {selectedService === 'Electricity' && (
            <><button onClick={() => handleServiceClick('Heating / AC')}>Next: Heating / AC</button>
                <h2>Electrical Services</h2>
                <p>
                Electricity is the set of physical phenomena associated with the presence and motion of matter that has a property of electric charge. In early days, electricity was considered as being not related to magnetism. Later on, many experimental results and the development of Maxwell’s equations indicated that both electricity and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to electricity, including lightning, static electricity, electric heating, electric discharges, and many others.
                </p>
                <p>
                The presence of an electric charge, which can be either positive or negative, produces an electric field. The movement of electric charges is an electric current and produces a magnetic field.
                </p>
                <div className="gallery">
                    {/* Add gallery images for the electricity service */}
                    <img src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_05-600x450.jpg" width="200px" height="200px" alt="" />&nbsp;
                    <img src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_04-600x450.jpg" width="200px" height="200px" alt="" />&nbsp;
                    <img src="https://preview.lsvr.sk/bluecollar/wp-content/uploads/sites/4/2018/10/service_gallery_03-600x450.jpg" width="200px" height="200px" alt="" />&nbsp;
                    {/* Add more images as needed */}
                </div>
                <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Electrical Panel Upgrade</td>
                    <td>$85</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Installation</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Bath Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Switch Installation</td>
                    <td>$25</td>
                    </tr>
                </tbody>
                </table>  
            </>
            )}
        {selectedService === 'Heating / AC' && (
            <>
              <button onClick={() => handleServiceClick('Painting')}>Next: Painting</button>
                <h2>Central Heating and Air Conditioning</h2>
                    <p>
                    Central heating and air conditioning systems provide both heating and cooling functions for residential and commercial buildings. The heat generation for central heating occurs in one place, such as a furnace room or mechanical room, and the heat is distributed throughout the building using forced-air through ductwork or water/steam through pipes. In central air conditioning, the cooling process is achieved by circulating refrigerant through a compressor and evaporator coil to remove heat from indoor air.
                    </p>
                    <p>
                    In many temperate climate zones, central heating and air conditioning systems are commonly installed to maintain comfortable indoor temperatures throughout the year. These systems have evolved from coal-fired steam or hot water systems to more efficient fuel oil or gas combustion, reducing the need for coal storage and ash removal. Both heating and cooling components require regular maintenance and occasional repairs to ensure optimal performance.
                    </p>
                    <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                        <th>Work Type</th>
                        <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Heating System Installation</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Heating System Repair</td>
                        <td>$85</td>
                    </tr>
                    <tr>
                        <td>Heating System Maintenance</td>
                        <td>$65</td>
                    </tr>
                    <tr>
                        <td>Thermostat Installation</td>
                        <td>$50</td>
                    </tr>
                    
                </tbody>
                <tbody>
                    <tr>
                        <td>Air Conditioning System Installation</td>
                        <td>$120</td>
                    </tr>
                    <tr>
                        <td>Air Conditioning System Repair</td>
                        <td>$95</td>
                    </tr>
                    <tr>
                        <td>Air Conditioning System Maintenance</td>
                        <td>$75</td>
                    </tr>
                    <tr>
                        <td>Thermostat Installation</td>
                        <td>$50</td>
                    </tr>
                </tbody>
                </table>
              
            </>
        )}

        {selectedService === 'Painting' && (
        <>
            <h2>Painting Services</h2>
                <p>
                    Painting is the practice of applying paint, pigment, color, or other medium to a solid surface (support base). The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. The final work is also called a painting.
                </p>
                <p>
                    Painting is an important form in the visual arts, bringing in elements such as drawing, gesture (as in gestural painting), composition, narration (as in narrative art), or abstraction (as in abstract art). Paintings can be naturalistic and representational (as in a still life or landscape painting), photographic, abstract, narrative, symbolistic (as in Symbolist art), emotive (as in Expressionism), or political in nature (as in Artivism).
                </p>
            <h2>Work Types and Prices</h2>
            <table>
            <thead>
                <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Painting of Walls</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Painting of Ceilings</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Exterior Painting</td>
                    <td>$80</td>
                </tr>
                <tr>
                    <td>Painting of Doors</td>
                    <td>$40</td>
                </tr>
                <tr>
                    <td>Painting of Cabinets</td>
                    <td>$70</td>
                </tr>
            </tbody>
            </table>
            <button onClick={() => handleServiceClick('Plumbing')}>Next: Plumbing</button>
        </>
        )}

        {selectedService === 'Plumbing' && (
        <>
            <h2>Plumbing Services</h2>
                <p>
                    Plumbing is any system that conveys fluids for a wide range of applications. It uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling (HVAC), waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications. The word derives from the Latin for lead, plumbum, as the first effective pipes used in the Roman era were lead pipes.
                </p>
                <p>
                    In the developed world, plumbing infrastructure is critical to public health and sanitation. While boilermakers and pipefitters work with piping as part of their trade, plumbing encompasses a broader scope of systems and applications.
                </p>
            <h2>Work Types and Prices</h2>
            <table>
            <thead>
                <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Leak Repairs</td>
                <td>$70</td>
                </tr>
                <tr>
                <td>Pipe Installation</td>
                <td>$80</td>
                </tr>
                <tr>
                <td>Drain Cleaning</td>
                <td>$60</td>
                </tr>
                <tr>
                <td>Toilet Repair</td>
                <td>$50</td>
                </tr>
                <tr>
                <td>Fixture Installation</td>
                <td>$40</td>
                </tr>
            </tbody>
            </table>
            <button onClick={() => handleServiceClick('Renovation')}>Next: Renovation</button>
        </>
        )}

        {selectedService === 'Renovation' && (
            <>
                <h2>Home Services</h2> 
                <p>
                Renovation (also called remodeling) is the process of improving a broken, damaged, or outdated structure. Renovations are typically either commercial or residential. Additionally, renovation can refer to making something new, or bringing something back to life and can apply in social contexts. For example, a community can be renovated if it is strengthened and revived.
                </p>
                <p>
                Technology has had a meaningful impact on the renovation process, increasing the significance and strength of the planning stage. The availability of free online design tools has improved visualization of the changes, at a fraction of the cost of hiring a professional interior designer. The decision regarding changes is also influenced by the purpose of renovation. In case of a fix and flip objective, an ROI (return on investment) can result from changes to fix a structural issue or design flow yield or to use light and color to make rooms appear more spacious.
                </p>
                <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Electrical Panel Upgrade</td>
                    <td>$85</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Installation</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Bath Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Switch Installation</td>
                    <td>$25</td>
                    </tr>
                </tbody>
                </table>
                <button onClick={() => handleServiceClick('Pressure Washing')}>Next: Pressure Washing</button>
            </>
        )}
        {selectedService === 'Pressure Washing' && (
            <>
                <h2>Home Services</h2>
                <p>
                Pressure washing, also known as power washing, is the process of using high-pressure water spray to remove dirt, grime, mold, mildew, and other contaminants from various surfaces. It is an effective method for cleaning and rejuvenating different surfaces, including driveways, sidewalks, decks, siding, fences, and more.
                </p>
                <p>
                Pressure washing utilizes advanced techniques and equipment to achieve thorough cleaning results. The high-pressure water spray helps to remove tough stains, dirt buildup, and even peeling paint, restoring the appearance and enhancing the overall aesthetics of surfaces.
                </p>
                <p>
                Whether you want to revitalize your outdoor spaces, prepare surfaces for painting or refinishing, or simply maintain a clean and fresh look, pressure washing can provide excellent results.
                </p>
                <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Driveway Pressure Washing</td>
                    <td>$50</td>
                    </tr>
                    <tr>
                    <td>Sidewalk Pressure Washing</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>Deck Pressure Washing</td>
                    <td>$60</td>
                    </tr>
                    <tr>
                    <td>Siding Pressure Washing</td>
                    <td>$70</td>
                    </tr>
                    <tr>
                    <td>Fence Pressure Washing</td>
                    <td>$45</td>
                    </tr>
                </tbody>
                </table>
                <button onClick={() => handleServiceClick('Sanitary')}>Next: Roofing</button>
            </>
            )}

        {selectedService === 'Sanitary' && (
            <>
                <h2>Home Services</h2>
                <p>
                Plumbing is any system that conveys fluids for a wide range of applications. It uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling (HVAC), waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications. The word derives from the Latin for lead, plumbum, as the first effective pipes used in the Roman era were lead pipes.
                </p>
                <p>
                In the developed world, plumbing infrastructure is critical to public health and sanitation. While boilermakers and pipefitters work with piping as part of their trade, plumbing encompasses a broader scope of systems and applications.
                </p>
                <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Electrical Panel Upgrade</td>
                    <td>$85</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Installation</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Bath Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Switch Installation</td>
                    <td>$25</td>
                    </tr>
                </tbody>
                </table>
                <button onClick={() => handleServiceClick('Drywall')}>Next: Renovation</button>
            </>
        )}
        {selectedService === 'Drywall' && (
            <>
                <h2>Home Services</h2>
                <p>
                Plumbing is any system that conveys fluids for a wide range of applications. It uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling (HVAC), waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications. The word derives from the Latin for lead, plumbum, as the first effective pipes used in the Roman era were lead pipes.
                </p>
                <p>
                In the developed world, plumbing infrastructure is critical to public health and sanitation. While boilermakers and pipefitters work with piping as part of their trade, plumbing encompasses a broader scope of systems and applications.
                </p>
                <h2>Work Types and Prices</h2>
                <table>
                <thead>
                    <tr>
                    <th>Work Type</th>
                    <th>Price per Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Electrical Panel Upgrade</td>
                    <td>$85</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Installation</td>
                    <td>$40</td>
                    </tr>
                    <tr>
                    <td>Ceiling Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Bath Fan Repair</td>
                    <td>$30</td>
                    </tr>
                    <tr>
                    <td>Switch Installation</td>
                    <td>$25</td>
                    </tr>
                </tbody>
                </table>
                <button onClick={() => handleServiceClick('Electricity')}>Back: Electricity</button>
            </>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
