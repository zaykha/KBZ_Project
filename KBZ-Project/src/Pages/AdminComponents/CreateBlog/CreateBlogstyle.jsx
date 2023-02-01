import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    padding: 50px;
    
    margin: 40px auto;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid grey;
    
    @media screen and (max-width:400px){
        width:100%
        box-sizing:border-box;
        padding:20px;
    }
`;
export const Clabel = styled.label`
    font-size: 0.7rem;
    // margin: 10px auto 10px 10px;
`;
export const CInput = styled.input`
    width: 300px;
    height: 28px;
    border: none;
    border-bottom: 1px solid grey;
    margin: 2px auto 20px 0;
    &:focus{
        outline:none;
        border-bottom: 2px solid blue;
    }
`;
export const FileInputdiv = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgInput = styled.input`
    width:180px;
    // border: 1px solid red;
    background-color: white;
    padding: 5px 5px;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px 20px 10px 10px;
`;
export const Imglabel =styled.label`
    font-size: 1.1rem;
`;
export const Imglabeluploaded =styled.label`
    font-size: 1.1rem;
    color: lightgreen;
`;
export const UploadCTA = styled.button`
    width: 100px;
    height: 30px;
    position: relative;
    top: 10px;
    font-size: 0.8rem;
    // border: 1px solid red;
    text-align: center;
    cursor: pointer;
`;
export const CTextArea = styled.textarea`
    width:300px;
    height: 400px;
    resize:none;
    border: none;
    border-bottom: 1px solid grey;
    margin-bottom: 40px;
    &:focus{
        outline:none;
        border-bottom: 2px solid blue;
    }
`;  
