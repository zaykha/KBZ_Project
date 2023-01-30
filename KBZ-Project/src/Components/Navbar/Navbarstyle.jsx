import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SearchSection = styled.div`
   display: flex;
   align-items: center;
    
`;
export const SearchInput = styled.div`
    width: 400px;
    height: 40px;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 0 20px;
    opacity: ${({ ShowSearch }) => (ShowSearch ? '0' : '100%')};
    transition: 0.8s ease-in-out;

`;
export const SearchIcon = styled.div`
    width: 40px;
    height: 40px;
    color: grey;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease-in;
    &:hover {
        color: #015EB9;
        transform: scale(1.2);
    }
`;
export const Ads = styled.div`
    height: 24px;
    width: 100%;
    margin: 0;
    
    position: relative;
    top: 0;
    font-size: 0.6rem;
    background: #e2f1f7;
`;
export const AdsContainer = styled.div`
    width: 72%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const Nav = styled.nav`
    font-family:'Fredoka', sans-serif;
    background: white;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    font-size: 1.3rem;
    position: sticky;
    top:0;
    z-index: 10;
    // background: linear-gradient(90deg, rgba(9,11,50,1) 0%, rgb(25,28,38) 100%);
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 80px;
    z-index: 1;
    width: 65%;
    margin: auto;
`;

export const NavLogo= styled(LinkR)`
    color:  #015EB9;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    // border-radius: 5px;

`;

export const Imgicon= styled.div`
    position: relative;
    left: 0px;
    // background: white;
    &:hover{
        color:#000;
    }
    // border: 1px solid red;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: 0;
    // text-shadow: 1px 2px black;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`
export const IMGTAG = styled.img`
// filter: invert(24%) sepia(56%) saturate(2532%) hue-rotate(304deg) brightness(93%) contrast(91%);
`;
export const NavLinks = styled(LinkR)`
    color: black;
    font-size: 0.97rem;
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 63%;
    cursor: pointer;
    position: relative;
    top: 9px;
    // margin: auto;

    
    // &:hover{
    //     color: #015EB9;
    // }

    &.active{
        border-bottom: 3px solid #015EB9;
    }
`

