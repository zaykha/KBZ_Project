import styled from "styled-components";

export const MineDiv = styled.div`
    width: 600px;
    margin: 0 auto;
    @media screen and (max-width:600px){
        width: 90%;
    }
`;
export const MineCard = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid red;
    cursor: pointer;
`;
export const MIMG = styled.div`
    width: 100px;
    height: 100%;
    border: 1px solid green;
    @media screen and (max-width:1000px){
        width: 100px;
    }
`;

export const MHeader = styled.div`
    font-size: 0.9rem;
    @media screen and (max-width:1000px){
        font-size: 0.8rem;
        line-height:1.3;
    }
`;
export const MAuthorImg = styled.div`
    width: 20px;
    height:20px;
    border-radius: 50%;
    border: 1px solid purple;
`
export const MAuthor = styled.div`
    font-size: 0.7rem;
    margin-left: 4px;

`;
export const Mdate = styled.div`
    font-size: 0.7rem;

`;
export const ViewMore = styled.div``;
export const MAdminposted = styled.div`
    font-size: 0.7rem;

`;
export const MAdminCreated = styled.div`
    font-size: 0.7rem;
    position: relative;
    right:0;
    line-height: 1.3;
    margin: 10px auto;
    @media screen and (max-width:1000px){
        font-size: 0.6rem;
    }
    

`;
export const Columndiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    margin: 5px auto auto 5px;
`;
export const FlexDiv = styled.div`
    display: flex;
`;