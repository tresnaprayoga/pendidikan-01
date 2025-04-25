import React from 'react';

const ServicesSection = ({ title, services }) => {
  return (
    <section id='layanan kami' className='services-section'>
      <h2>{title}</h2>
      <div className='services-grid'>
        {services.map((service, index) => (
          <div key={index} className='service-item'>
            <img src={service.image} alt={service.title} className='service-image' />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
