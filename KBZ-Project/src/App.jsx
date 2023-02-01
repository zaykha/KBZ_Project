import React,{useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashBoard from './Pages/AdminComponents/AdminDashBoard/AdminDashBoard';
import BlogList from './Pages/AdminComponents/BlogList/BlogList';
import CreateBlog from './Pages/AdminComponents/CreateBlog/CreateBlog';
import MyBlogs from './Pages/AdminComponents/MyBlogs/MyBlogs';
import AdminPage from './Pages/AdminPage';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },{
      path:"/BlogPage",
      element: <BlogPage/>
    },{
      path:"/adminPage",
      element: <AdminPage setIsAuth={setIsAuth}/>
    },{
      path:"/adminDashBoard",
      element: <AdminDashBoard isAuth={isAuth}/>
    },{
      path:"/BlogList",
      element: <BlogList isAuth={isAuth}/>
    },{
      path:"/CreateBlog",
      element: <CreateBlog isAuth={isAuth}/>
    },{
      path:"/MyBlogs",
      element: <MyBlogs isAuth={isAuth}/>
    }
  ]);

  return (
    <RouterProvider router={router} />)
}

export default App
