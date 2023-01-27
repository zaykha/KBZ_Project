import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },{
      path:"/BlogPage",
      element: <BlogPage/>
    }
  ]);

  return (
    <RouterProvider router={router} />)
}

export default App
