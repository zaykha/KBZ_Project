import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import BlogBody from './BlogPageComponents/BlogBody/BlogBody'
import BlogHead from './BlogPageComponents/BlogHead/BlogHead'

const BlogPage = () => {
  return (
    <>
        <Navbar/>
        <BlogHead/>
        <BlogBody/>
        <Footer/>
    </>
  )
}

export default BlogPage