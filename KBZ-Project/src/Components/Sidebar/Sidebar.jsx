import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './Sidebarstyle';

const Sidebar = ({togglesidebar, isOpen}) => {
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

            
        </SidebarWrapper>

    </SidebarContainer>

    );
};
export default Sidebar