import styled from "styled-components";

export const ClientDiv = styled.div`
    width: 100%;
    height: auto;
    // border: 1px solid red;
    position: relative;
    // top:-17rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const ClientHeader = styled.div`
    font-size: 2rem;
    margin: 50px auto 20px auto;
    @media screen and (max-width: 1000px){
        width: 90%;
        text-align: center;
        line-height:1.1;
    }
`;

export const ClientPhrase = styled.div`
    width: 700px;
    font-size: 0.8rem;

    margin: 20px auto;
    text-align: center;
    @media screen and (max-width: 1000px){
        width: 90%;
        text-align: center;
        
    }
`;

export const ClientCardDiv = styled.div`
    width: 1000px;
    display: flex;
    margin: 40px auto;
    flex-wrap:wrap;
    // border: 1px solid red;
    @media screen and (max-width: 1000px){
        width: 100%;
        text-align: center;
        
    }
`;
export const ClientCard = styled.div`
    width: 230px;
    height: auto;
    margin: 20px auto;
    // border:1px solid red;
    
    background: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
`;
export const ClientImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px auto 10px 20px;
    // border:1px solid red;
`;
export const CDescriptionHeader = styled.div`
    width: 80%;
    font-size: 0.9rem;
    font-weight: bold;
    border-bottom: 1px solid grey;
    margin: auto;
`;
export const CDescription = styled.div` 
    font-size: 0.7rem;
    margin: 20px auto;
    color:grey;

`;