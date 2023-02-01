import React from 'react'
import AdminNavbar from './AdminComponents/AdminNavbar/AdminNavbar'
import LoginPage from './AdminComponents/LoginPage/LoginPage'

const AdminPage = ({setIsAuth}) => {
  return (
    <>
    {/* <AdminNavbar/> */}
        <LoginPage setIsAuth={setIsAuth}/>
    </>
  )
}

export default AdminPage