import styled from "styled-components";

export const ServicesDiv = styled.div`
    width: 100%;
    height: auto;
    // border: 1px solid red;
    position: relative;
    // top:-17rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ServicesHeader = styled.div`
    font-size: 2rem;
    margin: 40px auto;
`;

export const ServicesPhrase = styled.div`
    width: 40%;
    font-size: 0.9rem;

    margin: 10px auto;
    text-align: center;
    @media screen and (max-width:1000px){
        width: 80%;
        position: relative;
        padding:0;
    }
`;

export const ServicesCardDiv = styled.div`
    width: 60%;
    display:flex;
    margin: 40px auto;
    flex-wrap:wrap;
    @media screen and (max-width:1000px){
        width: 100%;
        position: relative;
        padding:0;
    }
`;
export const ServicesCard = styled.div`
    width: 30%;
    // height: 300px;
    margin: 20px auto;
    // border:1px solid red;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
    @media screen and (max-width:1000px){
        width: 90%;
        margin: 10px auto;
        position: relative;
        padding:0;
    }
`;
export const ServicesImg = styled.img`
    width: 4rem;
    height: 4rem;
    filter: invert(75%) sepia(69%) saturate(5571%) hue-rotate(164deg) brightness(102%) contrast(107%);
    // border:1px solid red;
    margin: 20px;
`;

export const SDescription = styled.div`
    margin: 10px auto 20px;
    color:#323232;
    font-size:0.9rem;
`;