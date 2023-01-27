import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar';
import Clients from './HomePageComponents/Clients/Clients';
import Details from './HomePageComponents/Details/Details';
import Hero from './HomePageComponents/Hero/Hero';
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
    </>
  )
}

export default HomePage