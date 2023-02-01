import React,{useState} from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import BlogBody from './BlogPageComponents/BlogBody/BlogBody'
import BlogHead from './BlogPageComponents/BlogHead/BlogHead'

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  
  return (
    <>
        <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <Navbar togglesidebar={togglesidebar}/>
        <BlogHead/>
        <BlogBody/>
        <Footer/>
    </>
  )
}

export default BlogPage