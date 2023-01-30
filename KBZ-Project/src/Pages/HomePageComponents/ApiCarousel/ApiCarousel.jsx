import React,{useState,createContext} from 'react'
import { 
  AuthorDetail,
  AuthorName,
  AuthorProfile,
  BlogCard, 
  BlogCHeader, 
  BlogCTA, 
  BlogDetails, 
  BlogImage, 
  BlogPhrase, 
  DatePosted
} from '../../BlogPageComponents/BlogBody/BlogBodystyle';
import { 
  CarouselContainer, 
  CarouselCTA, 
  CarouselDiv, 
  CarouselHeader, 
  CarouselOuterDiv, 
  CarouselViewer,  
  LeftArrow, 
  RightArrow, 
  Slide, 

} from './ApiCarouselstyle';

// export const CarouselDivContext = createContext();
const ApiCarousel = () => {

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const APIdata = [
  {
    imageurl:"1",
    title:"Money",
    AurthorProfile:"a",
    AuthorName: "2ef",
    AuthoredDate:"sdf",
    AuthorContent:"ae",
  },
  {
    imageurl:"2",
    title:"M2",
    AurthorProfile:"a",
    AuthorName: "2ef",
    AuthoredDate:"sdg",
    AuthorContent:"ae",
  },
  {
    imageurl:"3",
    title:"M3",
    AurthorProfile:"badf",
    AuthorName: "2ef",
    AuthoredDate:"aser",
    AuthorContent:"aerqewr",
  },
  {
    imageurl:"4",
    title:"asdfqw",
    AurthorProfile:"asdfeqb",
    AuthorName: "2ef",
    AuthoredDate:"rykughnd",
    AuthorContent:"asvwene",
  },
  {
    imageurl:"5",
    title:"M5",
    AurthorProfile:"asbrqrt",
    AuthorName: "2ef",
    AuthoredDate:"avaerqt",
    AuthorContent:"asdfwqvr",
  },
  {
    imageurl:"5",
    title:"M5",
    AurthorProfile:"asbrqrt",
    AuthorName: "2ef",
    AuthoredDate:"avaerqt",
    AuthorContent:"asdfwqvr",
  },
  {
    imageurl:"5",
    title:"M5",
    AurthorProfile:"asbrqrt",
    AuthorName: "2ef",
    AuthoredDate:"avaerqt",
    AuthorContent:"asdfwqvr",
  },
  {
    imageurl:"5",
    title:"M5",
    AurthorProfile:"asbrqrt",
    AuthorName: "2ef",
    AuthoredDate:"avaerqt",
    AuthorContent:"asdfwqvr",
  }
  ]

  const goToPrevious =()=>{
    const Lengthofdiv=APIdata.length*300-900;
    const limit=-Math.abs(Lengthofdiv);
    CurrentIndex==0?
    setCurrentIndex(limit):
    setCurrentIndex(CurrentIndex+300);
    console.log(CurrentIndex);
  }

  const goToNext =()=>{
    const Lengthofdiv=APIdata.length*300-900;
    const limit=-Math.abs(Lengthofdiv);
    CurrentIndex==limit?
    setCurrentIndex(0):
    setCurrentIndex(CurrentIndex-300);
    console.log(CurrentIndex);
  }

  return (
    <CarouselOuterDiv>
    <CarouselHeader>KBZ Money Alerts</CarouselHeader>
    <CarouselContainer>
        <LeftArrow onClick={goToPrevious}>&#9665;</LeftArrow>
       <CarouselViewer>
        <CarouselDiv CurrentIndex={CurrentIndex}> 
      
        {APIdata.map((a,index)=>{
          return(
          <Slide key={index}>
          <BlogCard>
            <BlogImage>{a.imageurl}</BlogImage>
              <BlogCHeader>{a.title}</BlogCHeader>
                <BlogDetails>
                  <AuthorDetail>
                    <AuthorProfile>{a.AurthorProfile}</AuthorProfile>
                    <AuthorName>{a.AuthorName}</AuthorName>
                  </AuthorDetail>
                  <DatePosted>{a.AuthoredDate}</DatePosted>
                </BlogDetails>
            <BlogPhrase>{a.AuthorContent}</BlogPhrase>
            <BlogCTA>Read More</BlogCTA>
        </BlogCard>
        </Slide>
      )
        })}
      
        </CarouselDiv>
        </CarouselViewer>
        <RightArrow onClick={goToNext}>&#9655;</RightArrow> 
        
    </CarouselContainer>
    <CarouselCTA>Load More</CarouselCTA>
    </CarouselOuterDiv>
  )
}

export default ApiCarousel