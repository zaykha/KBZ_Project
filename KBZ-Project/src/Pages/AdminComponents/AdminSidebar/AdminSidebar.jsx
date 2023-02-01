import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { SearchIcon, SearchInput } from '../../../Components/Navbar/Navbarstyle';


import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SearchSection } from './Sidebarstyle';

const AdminSidebar = ({togglesidebar, isOpen}) => {
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
                <SidebarLink to='/CreateBlog' onClick={togglesidebar}>
                    Create
                </SidebarLink>

                <SidebarLink to='/MyBlogs' onClick={togglesidebar}>
                    MyBlogs
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
export default AdminSidebar