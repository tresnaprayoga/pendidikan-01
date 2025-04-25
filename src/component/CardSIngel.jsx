import React from 'react';

const AboutCard = ({ title, description, logo }) => {
  return (
    <div id='profil' className='about-card'>
      <div className='about-header'>
        {logo && <img src={logo} alt='Logo' className='about-logo' />}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
