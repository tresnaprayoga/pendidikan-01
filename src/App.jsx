import React from 'react';
import { useEffect } from 'react';
import Navbar from './component/Navbar';
import { NavBarItems, dataHeroSection, AboutData, serviceData, contentdata, imageData } from './dataLokal/data';
import HeroSection from './component/HeroSection';
import AboutCard from './component/CardSIngel';
import ServicesSection from './component/ServiceSection';
import ContentSection from './component/ContentSection';
import GaleriKegiatan from './component/GaleryPicture';
import WhatsAppButton from './component/WAbutton';

function App() {
  const dataNav = NavBarItems();
  const dataSection = dataHeroSection();
  const dataAbout = AboutData();
  const dataService = serviceData();
  const contentData = contentdata();
  const dataPicture = imageData();
  return (
    <>
      <header>
        <Navbar menuItems={dataNav} />
      </header>
      <main>
        <HeroSection slides={dataSection} />
        <WhatsAppButton text='Hubungi kami!' phoneNumber='1234567890' />
        <AboutCard title={dataAbout.title} description={dataAbout.description} logo={dataAbout.logo} />
        <ServicesSection title='Layanan Kami' services={dataService} />
        <ContentSection title={contentData.title} description={contentData.description} image={contentData.image} />
        <GaleriKegiatan images={dataPicture} />
      </main>
    </>
  );
}

export default App;
