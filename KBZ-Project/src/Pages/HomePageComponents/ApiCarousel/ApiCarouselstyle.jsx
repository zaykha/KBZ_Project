import styled from "styled-components";

export const CarouselHeader = styled.div`
   width: 400px;
  font-size: 2rem;
  margin: 40px auto;
  text-align: center;
`;

export const CarouselContainer = styled.div`
  width:1200px;
//   height: 800px;
  display: flex;
//   border: 1px solid red;
  margin: 20px auto 20px;
`;

export const CarouselViewer = styled.div`
  width: 890px;
  margin: auto;
  overflow: hidden;
`;
export const CarouselDiv = styled.div`

  display: flex;
//   border: 1px solid red;
    margin: auto;
    transform: translate(${props=>props.CurrentIndex}px, 0);
    transition: 0.5s ease-in;
    @media screen and (max-width: 1200px;){
    width:100%;
    
}
`;

export const Slide = styled.div`
    width: 280px;
    margin-right: 20px;
    // border: 1px solid green;
    // color: white;
`;
export const LeftArrow = styled.div`
    position:relative;
    bottom: 20%;
    transform: translate(0,50%);
    left: 0;
    font-size: 2rem;
    color: black;
    z-index: 20;
    cursor: pointer;

`;
export const RightArrow = styled.div`
    position:relative;
    top:45%;
    transform: translate(0,50%);
    right: 0;
    font-size: 2rem;
    color:black;
    z-index: 20;
    cursor: pointer;

`;
export const CarouselCTA = styled.button`
width: 12rem;
// height: 28px;
margin: 20px auto 40px auto;
background: #ff545f;
color: white;
border-radius: 10rem;
`;
export const CarouselOuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;