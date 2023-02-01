import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    box-sizing:border-box;
    background: white;
    display: flex;
    align-item: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=>( isOpen ? '0' : '-100%')};
    
`;
export const SearchSection = styled.div`
    display: none;
    @media screen and (max-width: 768px){
    
    display: flex;
    margin: 28px auto;
    align-items: center;
    width: 90%;
   }
`;
export const CloseIcon = styled(FaTimes)`
    color: black;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 3rem;
    background: transparent:
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`;

export const SidebarWrapper= styled.div`
   width: 90%;
   margin: auto;
    color: #000;
`;

export const SidebarMenu = styled.ul`
   width:100%;
   margin:0;
   padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 1000px){
        
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    width:80%;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    margin: 20px auto;
    &:hover{
        color: #fbae1a;
        transition: 0.2s ease-in-out;
    }
`;

