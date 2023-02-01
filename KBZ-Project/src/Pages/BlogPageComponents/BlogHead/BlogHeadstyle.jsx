import styled from "styled-components";
import BlogBg from '../../../assets/Polygon-Luminary.svg';

export const BlogHeadOuter = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background: url(${BlogBg}), no-repeat center;
     background-size: cover;
     color: white;
     margin-bottom: 40px;
`;
export const BlogHeader = styled.div`
    font-size: 2rem;
    margin: 40px auto 15px auto;
`;
export const BlogNav = styled.div`
    margin: 15px auto 40px auto;
`;