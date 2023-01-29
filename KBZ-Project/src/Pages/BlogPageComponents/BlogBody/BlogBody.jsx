import React from 'react'
import { 
    BlogBHeader, 
    BlogCard, 
    BlogCHeader, 
    BlogContent, 
    BlogContentDiv, 
    BlogCTA, 
    BlogDetails, 
    BlogImage, 
    BlogPhrase, 
    BlogSidebar 
} from './BlogBodystyle'

const BlogBody = () => {
  return (
    <>
        <BlogBHeader>Latest News</BlogBHeader>
        <BlogContentDiv>
            <BlogContent>
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

            </BlogContent>
            <BlogSidebar>

            </BlogSidebar>

        </BlogContentDiv>
    </>
  )
}

export default BlogBody