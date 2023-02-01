import styled from "styled-components";

export const BlogBHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;
export const BlogContentDiv = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
    @media screen and (max-width: 1000px;){
        width: 100vw;
        overflow:hidden;
       border: 1px solid red;
}

`;
export const BlogContent = styled.div`
    width: 630px;
    height: auto;
    margin:  0 auto;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px;){
        width: 100%;
       
}
`;
export const BlogSidebar = styled.div`
    width: 270px;
    height: auto;
    margin: 20px auto;
    @media screen and (max-width: 1000px;){
        width: 100%;
       
}
`;
export const BlogCard = styled.div`
    width: 280px;
    // height: 400px;
    // border: 1px solid purple;
    margin: 20px auto;
    border-radius: 10px;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const BlogImage = styled.div`
    width: 280px;
    height: 250px;
    background: white;
    margin: 0 auto 20px auto;
    border-radius: 5px 5px 0 0;
`;
export const BlogCHeader = styled.div`
    width: 80%;
    font-size: 1.1rem;
    margin: 20px auto;
`;
export const BlogDetails = styled.div`
    width: 80%;
    font-size: 0.7rem;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
`;
export const BlogPhrase = styled.div`
    width: 80%;
    margin: 20px auto;
    font-size: 0.9rem;

`;
export const BlogCTA = styled.div`
    width: 80%;
    margin: 20px auto;
    cursor:pointer;
    font-size: 0.9rem;

`;

export const AuthorDetail = styled.div`
`;
export const AuthorProfile = styled.div``;
export const AuthorName = styled.div``;
export const DatePosted = styled.div``;

export const SearchBar = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid lightgrey;
    background-color: white;
    font-size: 1.1rem;
    border-radius: 5px;
`;
export const Categories = styled.div`
    width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const CardHeader = styled.div`
    // width: 100%;
    margin: 0 0 10px 0;
    padding: 10px 0 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    background-color:#F9FBFC ;
    border-radius: 5px 5px 0 0;
    // 
    // border: 1px solid red;

`;
export const Catcontent = styled.div`
    width: 80%;
    margin: 20px auto;
   
`;
export const Category = styled.div`
    width: 100%;
    display: flex;
    margin: 10px auto;
    justify-content: space-between;
    
`;
export const CatName = styled.div`
    font-size: 0.8rem;
    
`;
export const CatCount = styled.div`
    font-size: 0.8rem;    
`;

export const RecentPost = styled.div`
    width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding-bottom: 10px;
`;
export const RPostdiv = styled.div`
    width: 80%;
    margin: 10px auto;
    display: flex;
`;
export const RpostImg = styled.div`
    width: 100px;
    height: 50px;
    margin-right: 10px;
    border: 1px solid green;
    border-radius: 5px;
`;
export const RPostDetailsDiv = styled.div`
    
`;
export const RpostDetail = styled.div`
    font-size: 0.7rem;
    line-height: 1.4;
    font-weight: bold;
`;
export const Rpostedtime = styled.div`
    font-size: 0.6rem;
`;

export const Tagdiv = styled.div` 
    width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const TagInflowdiv = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;

    
`;
export const Tag = styled.div`
    margin: 3px 3px;
    font-size: 0.7rem;
    background-color: F1F6F8;
    padding: 0 8px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: grey;
        color: white;
    }
`;
export const Subscribediv = styled.div`
    width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: rgb(15,89,193);
    color:white;
    padding: 20px 0;
`;
export const SubscribeHeader = styled.div`
    width: 80%;
    margin: 20px auto;
    text-align:center;
    font-size: 1.5rem;
`;
export const SEmailInput = styled.div`
    width: 80%;
    height: 28px;
    margin: 20px auto;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: white;
`;
export const SCTA = styled.div`
    width: 120px;
    padding: 4px 10px;
    // border: 1px solid red;
    text-align: center;
    margin: auto;
    border-radius: 5px;
    background-color: #20C2FF;
`;





