import styled from "styled-components";

export const ClientDiv = styled.div`
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

export const ClientHeader = styled.div`
    font-size: 3rem;
    margin: 50px auto;
`;

export const ClientPhrase = styled.div`
    width: 40%;
    margin: 20px auto;
    text-align: center;
`;

export const ClientCardDiv = styled.div`
    width: 60%;
    display: flex;
    margin: 40px auto;
    flex-wrap:wrap;
    // border: 1px solid red;
`;
export const ClientCard = styled.div`
    width: 20%;
    height: auto;
    margin: 20px auto;
    // border:1px solid red;
    
    background: rgba(225,225,225,0.5);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
`;
export const ClientImg = styled.img`
    width: 100%;
    height: 200px;
    border: none;
    margin: 0 0 20px 0;
`;
export const CDescriptionHeader = styled.div`
    width: 80%;
    font-size: 1.1rem;
    font-weight: bold;
    border-bottom: 1px solid grey;
    margin: auto;
`;
export const CDescription = styled.div`
    margin: 20px auto;
    color:grey;

`;