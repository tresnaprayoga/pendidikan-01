import React from 'react';

const ContentSection = ({ title, description, image }) => {
  return (
    <section className='content-section'>
      <h2 id='info'>{title}</h2>
      <div className='content-wrapper'>
        <div className='content-text'>
          <p>{description}</p>
        </div>
        <div className='content-image'>
          <img src={image} alt='Content illustration' />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
