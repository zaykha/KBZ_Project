import styled from "styled-components";

export const Stats = styled.div`
    width: 50%;
    height: auto;
    // border: 1px solid red;
    margin: auto;
    position:relative;
    top:-8rem;
    display:flex;
`;
export const Statsimg = styled.div`
    width: 4rem;
    height: 4rem;
    border: 1px solid blue;
    margin: 20px auto 20px 40px;
`;
export const StatsCard= styled.div`
    width: 30%;
    height: 250px;
    background: white;
    // border: 1px solid blue;
    margin: auto;
    z-index: 2;
    // box-shadow: 5px 5px lightgrey;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
	-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5)  ; 
    padding: 10px 0;
`;
export const Statscontent = styled.div`
    width:80%;
    margin: 15px auto;
`;
export const StatsHeader = styled.div`
    font-size: 1.3em;
    margin: 15px auto;
`;
export const Statsphrase = styled.div`
    font-size: 0.8rem;
    margin: 15px auto;
    color: #232323;
`;
export const StatsLink = styled.div`
    color: blue;
    margin: 15px auto;

`;
export const OuterdivContent1 = styled.div`
    width:  100%;
    height: auto;
    // border: 1px solid green;
    padding-top: 5%;
    position:relative;
    top:-17rem;
`;
export const OuterdivContent = styled.div`
    width:100%;
    height: auto;
    // border: 1px solid red;
    position:relative;
    top:-17rem;
    overflow: hidden;
`;
export const InnerdivContent = styled.div`
    width: 50%;
    height: auto;
    margin: 70px auto;
    // border: 1px solid green;
    display: flex;
    padding: 30px;
`;
export const Imgdiv = styled.img`
    width: 40%;
    height: auto;
    margin: auto;
    // border: 1px solid red;
`;
export const Contentdiv = styled.div`
    width: 40%;
    height: auto;
    margin: auto;
    // border: 1px solid red;
    padding: 20px;
`;
export const ContentHeader2 = styled.div`
    font-size: 2rem;
    margin: 20px auto 40px 0;
    font-weight: bold;
    line-height: 1.2;
    color: white;
`;
export const Contentphrase2 = styled.div`
    margin: 20px auto 20px 0;
    color:white;
`;
export const ContentHeader = styled.div`
    font-size: 2rem;
    margin: 20px auto 40px 0;
    font-weight: bold;
    line-height: 1.2;
`;
export const Contentphrase = styled.div`
    margin: 20px auto 20px 0;
`;
export const ContentImg = styled.img`
    width: 100%;
    position: absolute;
    object-fit: fill;
    z-index: -2;
`;