import styled from "styled-components";

export const Stats = styled.div`
    width: 900px;
    height: auto;
    // border: 1px solid red;
    // margin: auto;
    position:absolute;
    top: 90vh;
    transform: translate(35%,0);
    z-index:4;
    display:flex;
    flex-wrap:wrap;
    @media screen and (max-width:1000px){
        width: 100%;
        position: relative;
        top:0;
        transform: translate(0%,0%);
    }
`;
export const Statsimg = styled.img`
    width: 4rem;
    height: 4rem;
    // border: 1px solid blue;
    margin: 10px auto 5px 20px;
    filter: invert(75%) sepia(69%) saturate(5571%) hue-rotate(164deg) brightness(102%) contrast(107%);
`;
export const StatsCard= styled.div`
    width: 28%;
    // height: 250px;
    background: white;
    // border: 1px solid blue;
    margin: auto;
    z-index: 2;
    // box-shadow: 5px 5px lightgrey;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
    padding: 10px 0;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color:#015EB9;
        color:white;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
        cursor:pointer;
    }
    @media screen and (max-width:1000px){
        width: 90%;
        margin:10px auto;
        position: relative;
        top:0;
        transform: translate(0%,0%);
    }
`;
export const Statscontent = styled.div`
    width:80%;
    margin: 15px auto;
`;
export const StatsHeader = styled.div`
    font-size: 1rem;
    margin: 15px auto;
`;
export const Statsphrase = styled.div`
    font-size: 0.6rem;
    margin: 15px auto;
   
`;
export const StatsLink = styled.div`
    font-size: 0.7rem;
    // color: blue;
    margin: 15px auto;

    &:hover{
        cursor:pointer;
        color: #00B9FF;
    }

`;
export const OuterdivContent1 = styled.div`
    width:  100%;
    height: auto;
    // border: 1px solid green;
    padding-top: 5%;
    position:relative;
    // top:-17rem;
`;
export const OuterdivContent = styled.div`
    width:100%;
    height: auto;
    // border: 1px solid red;
    position:relative;
    // top:-17rem;
    overflow: hidden;
`;
export const InnerdivContent = styled.div`
    width: 1000px;
    height: auto;
    margin: 40px auto;
    // border: 1px solid green;
    display: flex;
    flex-wrap:wrap;
    padding: 30px;
    @media screen and (max-width:1000px){
        width: 100%;
        position: relative;
        padding:0;
    }
`;
export const Imgdiv = styled.img`
    width: 40%;
    height: auto;
    margin: auto;
    // border: 1px solid red;
    @media screen and (max-width:1000px){
        width: 50%;
        position: relative;
        padding:0;
    }
`;
export const Contentdiv = styled.div`
    width: 40%;
    height: auto;
    margin: auto;
    // border: 1px solid red;
    padding: 20px;
    @media screen and (max-width:1000px){
        width: 80%;
        position: relative;
        padding:0;
    }
`;
export const ContentHeader2 = styled.div`
    font-size: 1.5rem;
    margin: 20px auto 40px 0;
    font-weight: bold;
    line-height: 1.2;
    color: white;

`;
export const Contentphrase2 = styled.div`
    margin: 20px auto 20px 0;
    color:white;
    font-size: 0.7rem;

`;
export const ContentHeader = styled.div`
    font-size: 1.5rem;
    margin: 20px auto 20px 0;
    font-weight: bold;
    line-height: 1.2;
`;
export const Contentphrase = styled.div`
    margin: 20px auto 20px 0;
    font-size: 0.7rem;

`;
export const ContentImg = styled.img`
    width: 100%;
    position: absolute;
    object-fit: fill;
    z-index: -2;
    @media screen and (max-width:1000px){
        height: 100%;
        object-fit:cover;
    }
`;