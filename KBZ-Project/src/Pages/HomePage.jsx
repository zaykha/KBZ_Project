import React, {useState} from 'react'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar';
import ApiCarousel from './HomePageComponents/ApiCarousel/ApiCarousel';
import Clients from './HomePageComponents/Clients/Clients';
import Details from './HomePageComponents/Details/Details';
import Hero from './HomePageComponents/Hero/Hero';
import Newslettersub from './HomePageComponents/Newslettersub/Newslettersub';
import PlatformCTA from './HomePageComponents/PlatformCTA/PlatformCTA';
import Services from './HomePageComponents/Services/Services';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  

  return (
    <>
        <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <Navbar togglesidebar={togglesidebar}/>
        <Hero/>
        <Details/>
        <Services/>
        <Clients/>
        <PlatformCTA/>
        <ApiCarousel/>
        <Newslettersub/>
        <Footer/>
    </>
  )
}

export default HomePage