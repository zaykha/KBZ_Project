import styled from "styled-components";

export const Outerdiv = styled.div`
    width:100%;
    height: 80vh;
    padding-top: 100px;
    background: linear-gradient(90deg, #e2f1f7 0%, #d3edf7 100%);
    // padding-bottom: 100px;
    @media screen and (max-width:1000px){
        height: auto;
        padding-top:20px;
    }
`;
export const InnerDiv = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    margin: auto;
    @media screen and (max-width:1000px){
        width:100%;
        margin: 10px auto;
    }
`;
export const CTADiv = styled.div`
    width: 500px;
    Margin: 0 20px;
    // border: solid red 1px;
    @media screen and (max-width:768px){
        width:100%;
    }
`;
export const HeroIMG = styled.img`
    width: 400px;
    Margin: 0 20px;
    // border: solid red 1px;
    @media screen and (max-width:1000px){
        width:50%;
    }
`;
export const BGcolor = styled.div`
    width: 100%;    
    z-index: -1;
    
    
`;
export const Heroh1 = styled.div`
    font-size: 1.8rem;
    margin: 10px;
    line-height: 1.5;
    font-weight: bold;
`;

export const Herosmall = styled.div`
    font-size: 0.9rem;
    margin: 20px 50px 20px 10px;
`
export const Colorspan = styled.span`
    color: #015eb9;
`
export const CTAButton = styled.button`
    width: 12rem;
    margin: 20px 0;
    background: #ff545f;
    color: white;
    border-radius: 10rem;
`;