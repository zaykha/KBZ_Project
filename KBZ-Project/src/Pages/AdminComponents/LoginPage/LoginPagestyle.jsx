import styled from "styled-components";

export const LoginDiv = styled.div`
    width: 100%;
    height: 100%;
`;
export const LoginCard = styled.div`
    
`;
export const LoginHeader = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-size: 1.4rem;
    // font-weight: bold;
    margin-top: 40px;
    text-align: center;
 
`;

export const LoginLogo = styled.img`
    width: 100px;
    height: 80px;
    margin: 20px auto;
`;
export const LoginForm = styled.div`
    width: 500px;
    // height: 300px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
    margin: 3% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:500px){
        width: 100%;
    }
    `;


export const Username = styled.input`
    width: 60%;
    height: 28px;
    margin: 20px auto;
    font-size: 1.1rem;
    // border-radius: 5px;
    border: none;
    border-bottom: 1px solid grey;
    
    &:focus {
        outline: none;
        border-bottom: 2px solid #015EB9;
    }
    
`;
export const Password = styled.input`
    width: 60%;
    height: 28px;
    font-size: 1.1rem;
    
    border: none;
    border-bottom: 1px solid grey;
    &:focus {
        outline: none;
        border-bottom: 2px solid #015EB9;
    }

`;
export const LoginBtn = styled.div`
    box-sizing: border-box;
    width: 180px;
    height: 30px;
    margin: 40px auto;
    text-align: center;
    color: white;
    background:#015EB9;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        transform: scale(1.1);
    }
`;