import React,{useEffect, useState} from 'react'
import { UploadCTA } from '../../AdminComponents/CreateBlog/CreateBlogstyle'
import { 
    AuthorDetail,
    AuthorName,
    AuthorProfile,
    BlogBHeader, 
    BlogCard, 
    BlogCHeader, 
    BlogContent, 
    BlogContentDiv, 
    BlogCTA, 
    BlogDetails, 
    BlogImage, 
    BlogPhrase, 
    BlogSidebar, 
    CardHeader, 
    Catcontent, 
    CatCount, 
    Categories, 
    Category, 
    CatName, 
    DatePosted,
    RecentPost,
    RpostDetail,
    RPostDetailsDiv,
    RPostdiv,
    Rpostedtime,
    RpostImg,
    SCTA,
    SearchBar,
    SEmailInput,
    Subscribediv,
    SubscribeHeader,
    Tag,
    Tagdiv,
    TagInflowdiv
} from './BlogBodystyle';
import { db } from '../../../firebase';
import { collection } from 'firebase/firestore';

const BlogBody = () => {
    const [Expand, setExpand] = useState(false);

    const toggleExpand = ()=>{
        setExpand(!Expand);
    }
    ;
    const [subCategories, setSubCategories] = useState([]);
    
  useEffect(() => {
    try{
    const fetchSubCategories = async () => {
      const subCategoriesRef = db.collection("blog").orderBy("tag", "asc");
      const subCategoriesSnapshot = await subCategoriesRef.get();

      setSubCategories(subCategoriesSnapshot.docs.map(doc => doc.data()));}
      console.log(subCategories);
      fetchSubCategories();
    } catch(error){
        console.error(error)
    };

   
  }, []);
  return (
    <>
        <BlogBHeader>Latest News</BlogBHeader>
        <BlogContentDiv>
            <BlogContent>
                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>Major Crypo Exchanges Faces Action Over</BlogCHeader>
                    <BlogDetails>
                        <AuthorDetail>
                            <AuthorProfile></AuthorProfile>
                            <AuthorName>Darlene Robertson</AuthorName>
                        </AuthorDetail>
                        <DatePosted>5/27/15</DatePosted>
                    </BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>
                

                {Expand?
                <>
                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>

                <BlogCard>
                    <BlogImage></BlogImage>
                    <BlogCHeader>hello</BlogCHeader>
                    <BlogDetails>asdfaer</BlogDetails>
                    <BlogPhrase>asdfaefarwqefasvarveqrt qwert qrtqweq wer</BlogPhrase>
                    <BlogCTA>Read More</BlogCTA>
                </BlogCard>
                </>:<></>
                 }
                 <UploadCTA onClick={toggleExpand}>Read More</UploadCTA>
            </BlogContent>


            <BlogSidebar>
                <SearchBar type='text' placeholder='Search'/>

                <Categories>
                    <CardHeader>Categories</CardHeader>
                    <Catcontent>
                        <Category>
                            <CatName>Alerts</CatName>
                            <CatCount>35</CatCount>
                        </Category>
                        <Category>
                            <CatName>Company News</CatName>
                            <CatCount>28</CatCount>
                        </Category>
                    </Catcontent>
                </Categories>

                <RecentPost>
                    <CardHeader>Recent Post</CardHeader>
                    <RPostdiv>
                        <RpostImg></RpostImg>
                        <RPostDetailsDiv>
                            <RpostDetail>Major Crypto Exchanges Face Action Over</RpostDetail>
                            <Rpostedtime>8 hours ago</Rpostedtime>
                        </RPostDetailsDiv>
                    </RPostdiv>

                    <RPostdiv>
                        <RpostImg></RpostImg>
                        <RPostDetailsDiv>
                            <RpostDetail>Major Crypto Exchanges Face Action Over</RpostDetail>
                            <Rpostedtime>8 hours ago</Rpostedtime>
                        </RPostDetailsDiv>
                    </RPostdiv>

                    <RPostdiv>
                        <RpostImg></RpostImg>
                        <RPostDetailsDiv>
                            <RpostDetail>Major Crypto Exchanges Face Action Over</RpostDetail>
                            <Rpostedtime>8 hours ago</Rpostedtime>
                        </RPostDetailsDiv>
                    </RPostdiv>

                    <RPostdiv>
                        <RpostImg></RpostImg>
                        <RPostDetailsDiv>
                            <RpostDetail>Major Crypto Exchanges Face Action Over</RpostDetail>
                            <Rpostedtime>8 hours ago</Rpostedtime>
                        </RPostDetailsDiv>
                    </RPostdiv>
                </RecentPost>

                <Tagdiv>
                <CardHeader>Tag</CardHeader>
                    <TagInflowdiv>
                    {subCategories.map(subCategory => (
                        <Tag key={subCategory.id}>
                            {subCategory.name}
                        </Tag>
                    ))}
                        {/* <Tag>Money alerts</Tag>
                        <Tag>News</Tag>
                        <Tag>Technology</Tag>
                        <Tag>crypto-currencies</Tag>
                        <Tag>AML Outsourcing</Tag>
                        <Tag>AML Services</Tag>
                        <Tag>Support</Tag> */}
                    </TagInflowdiv>
                </Tagdiv>

                <Subscribediv>
                    <SubscribeHeader>Subscribe to KBZ Money Alerts</SubscribeHeader>
                    <SEmailInput></SEmailInput>
                    <SCTA>Subscribe Now</SCTA>
                </Subscribediv>

            </BlogSidebar>

        </BlogContentDiv>
    </>
  )
}

export default BlogBody