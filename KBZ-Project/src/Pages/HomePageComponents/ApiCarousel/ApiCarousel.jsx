import React,{useState,useEffect} from 'react'
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
  CarouselPhrase, 
  CarouselViewer,  
  LeftArrow, 
  RightArrow, 
  Slide, 

} from './ApiCarouselstyle';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db, storage } from '../../../firebase';

// export const CarouselDivContext = createContext();
const ApiCarousel = () => {
  const [postList, setpostList] = useState([]);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const BlogCollectionRef = collection(db,'blog');
  const [loading, setLoading]= useState(false);
  const getPosts = async()=>{
    setLoading(false);
    const data = await getDocs(BlogCollectionRef);
    setpostList(data.docs.map((doc)=>({...doc.data()})));
    setLoading(false);
  }

  const goToPrevious =()=>{
    const Lengthofdiv=postList.length*300-900;
    const limit=-Math.abs(Lengthofdiv);
    CurrentIndex==0?
    setCurrentIndex(limit):
    setCurrentIndex(CurrentIndex+300);
    console.log(CurrentIndex);
  }

  const goToNext =()=>{
    const Lengthofdiv=postList.length*300-900;
    const limit=-Math.abs(Lengthofdiv);
    CurrentIndex==limit?
    setCurrentIndex(0):
    setCurrentIndex(CurrentIndex-300);
    console.log(CurrentIndex);
  }
  useEffect(()=>{
    getPosts();
    
  },[]);
  return (
    <CarouselOuterDiv>
    <CarouselHeader>KBZ Money Alerts</CarouselHeader>
    <CarouselContainer>
        <LeftArrow onClick={goToPrevious}>&#9665;</LeftArrow>
       <CarouselViewer>
        <CarouselDiv CurrentIndex={CurrentIndex}> 
      
        {postList.map((a,index)=>{
          return(
          <Slide key={index}>
          <BlogCard>
            <BlogImage></BlogImage>
              <BlogCHeader>{a.title}</BlogCHeader>
                <BlogDetails>
                  <AuthorDetail>
                    <AuthorProfile></AuthorProfile>
                    <AuthorName>{a.author}</AuthorName>
                  </AuthorDetail>
                  <DatePosted>{a.authoredDate}</DatePosted>
                </BlogDetails>
            <CarouselPhrase>{a.content}</CarouselPhrase>
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