import React from 'react';

const GaleriKegiatan = ({ images }) => {
  return (
    <section className='galeri-section'>
      <h2 id='galeri' className='galeri-title'>
        Galery Kegiatan
      </h2>
      <div className='galeri-layout'>
        {images.map((img, idx) => (
          <div className={`galeri-item ${img.className}`} key={idx}>
            <img src={img.src} alt={`kegiatan-${idx}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GaleriKegiatan;
