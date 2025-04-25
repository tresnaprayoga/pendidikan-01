import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import { NavBarItems, dataHeroSection, AboutData, serviceData, contentdata, imageGalery } from './dataLokal/data';
import HeroSection from './component/HeroSection';
import AboutCard from './component/CardSIngel';
import ServicesSection from './component/ServiceSection';
import ContentSection from './component/ContentSection';
import GaleriKegiatan from './component/GaleryPicture';
import WhatsAppButton from './component/WAbutton';
import FooterSosial from './component/Footer';

function App() {
  const [dataNavbar, setDataNav] = useState(NavBarItems());
  const [dataSection, setDataSection] = useState(dataHeroSection());
  const [dataAbout, setDataAbout] = useState(AboutData());
  const [dataService, setDataService] = useState(serviceData());
  const [contentData, setDataContent] = useState(contentdata());
  const [dataGalery, setDataGalery] = useState(imageGalery());
  // const dataNav = NavBarItems();
  // const dataSection = dataHeroSection();
  // const dataAbout = AboutData();
  // const dataService = serviceData();
  // const contentData = contentdata();
  // const dataPicture = imageGalery();
  return (
    <>
      <header>
        <Navbar menuItems={dataNavbar} />
      </header>
      <main>
        <HeroSection slides={dataSection} />
        <WhatsAppButton text='Hubungi kami!' phoneNumber='1234567890' />
        <AboutCard title={dataAbout.title} description={dataAbout.description} logo={dataAbout.logo} />
        <ServicesSection title='Layanan Kami' services={dataService} />
        <ContentSection title={contentData.title} description={contentData.description} image={contentData.image} />
        <GaleriKegiatan images={dataGalery} />
      </main>
      <footer>
        <FooterSosial />
      </footer>
    </>
  );
}

export default App;
