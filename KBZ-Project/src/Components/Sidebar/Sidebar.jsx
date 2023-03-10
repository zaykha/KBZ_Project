import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { SearchIcon, SearchInput } from '../Navbar/Navbarstyle';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SearchSection } from './Sidebarstyle';

const Sidebar = ({togglesidebar, isOpen}) => {
    const [ShowSearch, setShowSearch] = useState(true);

   const toggleshowsearch = ()=>{
     setShowSearch(!ShowSearch)
   }
  return (
    <SidebarContainer isOpen={isOpen} onClick={togglesidebar}>
    <Icon onClick={togglesidebar}>
        <CloseIcon/>
    </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={togglesidebar}>
                    Home
                </SidebarLink>

                <SidebarLink to='/BlogPage' onClick={togglesidebar}>
                    Blog
                </SidebarLink>

                
            </SidebarMenu>
            <SearchSection>
              <SearchInput ShowSearch={ShowSearch}></SearchInput>  
              <SearchIcon onClick={toggleshowsearch}>
                <FaSearch/>
              </SearchIcon>
              </SearchSection>
            
        </SidebarWrapper>

    </SidebarContainer>

    );
};
export default Sidebar