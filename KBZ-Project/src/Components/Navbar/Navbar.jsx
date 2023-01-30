import React,{useState} from 'react'
import {FaBars, FaSearch} from 'react-icons/fa';
import { Ads, AdsContainer, IMGTAG, Nav, NavbarContainer, NavLogo, Imgicon, MobileIcon, NavMenu, NavItem, NavLinks, SearchSection, SearchInput, SearchIcon } from './Navbarstyle';
import logo from '../../assets/KBZ_Bank_logo.svg.png'

const Navbar = (togglesidebar) => {
   const [ShowSearch, setShowSearch] = useState(true);

   const toggleshowsearch = ()=>{
     setShowSearch(!ShowSearch)
   }
  return (
   <>
    <Ads>
        <AdsContainer>
        <div> +959 7980 65880</div>    
        <div> UPDATES - Click Here for KBZ Money News Alerts - UPDATES</div>   
        <div> admin@kbzmoney.com</div> 
        </AdsContainer>  
    </Ads>
    <Nav>
    <NavbarContainer>
        <NavLogo to='/'>
          <Imgicon>
            <IMGTAG src={logo} alt='logo' width='30px' />
            </Imgicon>
            KBZ MONEY
        </NavLogo>
            <MobileIcon onClick={togglesidebar}>
              <FaBars />
            </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinks to='/'>Home</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to='/BlogPage'>Blog</NavLinks>
                </NavItem>


              </NavMenu>   

              <SearchSection>
              <SearchInput ShowSearch={ShowSearch}></SearchInput>  
              <SearchIcon onClick={toggleshowsearch}>
                <FaSearch/>
              </SearchIcon>
              </SearchSection>       
    </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar