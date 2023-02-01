import React from 'react'
import { 
    MobileIcon,
    Nav, 
    NavbarContainer, 
    NavItem, 
    NavLinks, 
    NavLogo,
    NavMenu,
    SmallStyled
} from '../../../Components/Navbar/Navbarstyle'
import { SignOutBtn } from './AdminNavbarstyle';
import {auth} from '../../../firebase.jsx';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const AdminNavbar = ({togglesidebar}) => {

  const SignUserOut = ()=>{
    signOut(auth).then(()=>{
        localStorage.clear();
        // setIsAuth(false);
        window.location.pathname='/AdminPage';
    })
}

  return (
    <Nav>
    <NavbarContainer>
        <NavLogo to='/adminDashBoard'>
            KBZ MONEY<SmallStyled>Admin</SmallStyled>
        </NavLogo>
          <MobileIcon onClick={togglesidebar}>
              <FaBars />
            </MobileIcon>

              <NavMenu>

                <NavItem>
                  <NavLinks to='/CreateBlog'>Create</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to='/MyBlogs'>MyBlogs</NavLinks>
                </NavItem>

                <SignOutBtn onClick={SignUserOut}>Log Out</SignOutBtn>
              </NavMenu>   
                
    </NavbarContainer>
    </Nav>
  )
}

export default AdminNavbar