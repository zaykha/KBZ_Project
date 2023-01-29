import React from 'react'
import { BlogHeader, BlogHeadOuter, BlogNav } from './BlogHeadstyle'

const BlogHead = () => {
  return (
    <>
        <BlogHeadOuter>
            <BlogHeader>
                    Blog
            </BlogHeader>
            <BlogNav>
                Home &#8827; Blog
            </BlogNav>
        </BlogHeadOuter>
    </>
  )
}

export default BlogHead