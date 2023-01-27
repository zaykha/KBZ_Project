import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Ads, AdsContainer, IMGTAG, Nav, NavbarContainer, NavLogo, Imgicon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbarstyle';
import logo from '../../assets/KBZ_Bank_logo.svg.png'

const Navbar = (togglesidebar) => {
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
    </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar