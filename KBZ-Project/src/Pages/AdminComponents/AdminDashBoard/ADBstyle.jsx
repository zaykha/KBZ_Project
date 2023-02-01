import styled from "styled-components";

export const Dh3 = styled.div`
    width: 100%;
    text-align: center;
    margin: 20px auto;
    font-size:1.4rem;
`;
export const AdminHeader = styled.div`
    width: 100%;
    margin: 0 auto 10px auto;
`;
export const Dashboard = styled.div`
    width: 1000px;
    margin: 40px auto;
    display: flex;
    flex-wrap:wrap;
    @media screen and (max-width:1000px){
        width: 100%;
    }
`;
export const FlexDiv = styled.div`
    display: flex;
`;
export const AsideDiv = styled.div`
    width: 300px;
    display:flex;
    flex-direction: column;
    
    @media screen and (max-width:1000px){
        margin:auto;
    }
    // margin: auto;

`;
export const MyDiv = styled.div`
    width: 100%;
    // border: 1px solid red;
`;
export const MyPost = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    margin: 0 auto 10px auto;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid grey;
`;
export const Columndiv = styled.div`
    display:flex;
    flex-direction: column;
    margin: 5px auto auto 5px;
`;
export const ManageCTA = styled.div`
    cursor:pointer;
    width: 200px;
    text-align: center;
    margin: auto;
    &:hover{
        color: blue;
        font-size: 1.01rem;
    }
`;

export const CreateDiv = styled.div`
    width: 100%;
    height: 120px;
    border: 1px solid grey;
    margin: 20px auto;
`;
export const CreateHeader = styled.div`
    width: 100%;
    text-align: center;
    margin: 20px auto;
`;
export const CreateCTA = styled.div`
    width: 100px;
    height: 28px;
    border: 1px solid grey;
    text-align: center;
    border-radius: 4px;
    margin: auto;
    cursor:pointer;
`;

export const ViewDiv = styled.div`
    width: 600px;
    margin: 0 auto;
    @media screen and (max-width:600px){
        width: 90%;
    }
`;
export const ViewCard = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid grey;
    cursor: pointer;
`;
export const CIMG = styled.div`
    width: 100px;
    height: 100%;
    border: 1px solid green;
`;

export const CHeader = styled.div`
    font-size: 0.9rem;
`;
export const CAuthorImg = styled.div`
    width: 20px;
    height:20px;
    border-radius: 50%;
    border: 1px solid purple;
`
export const CAuthor = styled.div`
    font-size: 0.7rem;
    margin-left: 4px;

`;
export const Cdate = styled.div`
    font-size: 0.7rem;

`;
export const ViewMore = styled.div``;
export const Adminposted = styled.div`
    font-size: 0.7rem;

`;
export const AdminCreated = styled.div`
    font-size: 0.7rem;

`;


