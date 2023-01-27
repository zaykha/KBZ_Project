import styled from "styled-components";

export const ServicesDiv = styled.div`
    width: 100%;
    height: auto;
    // border: 1px solid red;
    position: relative;
    top:-17rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const ServicesHeader = styled.div`
    font-size: 3rem;
    margin: 50px auto;
`;

export const ServicesPhrase = styled.div`
    width: 40%;
    margin: 20px auto;
    text-align: center;
`;

export const ServicesCardDiv = styled.div`
    width: 60%;
    display:flex;
    margin: 40px auto;
    flex-wrap:wrap;
`;
export const ServicesCard = styled.div`
    width: 30%;
    height: 300px;
    margin: 20px auto;
    // border:1px solid red;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: rgba(225,225,225,0.7);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
`;
export const ServicesImg = styled.img`
    width: 20%;
    height: 20%;
    border:1px solid red;
    margin: 20px;
`;

export const SDescription = styled.div`
    margin: 20px auto;
    color:#323232;
`;