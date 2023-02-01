import React,{useState,useEffect} from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar.jsx';
import { 
    AdminCreated,
    AdminHeader,
    Adminposted,
    AsideDiv,
    CAuthor,
    CAuthorImg,
    Cdate,
    CHeader,
    CIMG,
    Columndiv,
    CreateCTA,
    CreateDiv,
    CreateHeader,
    Dashboard, 
    Dh3, 
    FlexDiv, 
    ManageCTA, 
    MyDiv,
    MyPost,
    ViewCard,
    ViewDiv,
    ViewMore
} from './ADBstyle.jsx';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar.jsx';

const AdminDashBoard = ({isAuth}) => {
    // const Navigate = useNavigate();
    // useEffect(()=>{
    //     if(!isAuth){
    //       Navigate('/adminPage')
    //     }
    //   })
    const [isOpen, setIsOpen] = useState(false);
  
    const togglesidebar = () => {
       setIsOpen(!isOpen);
    }  
  return (
    <>
        <AdminSidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <AdminNavbar togglesidebar={togglesidebar}/>
        <Dh3>Welcome!</Dh3>
        <Dashboard>
            <AsideDiv>
                    <MyDiv>
                        <AdminHeader>My Posts</AdminHeader>
                        <MyPost>
                            <CIMG></CIMG>
                            <Columndiv>
                                <CHeader>Blog 1</CHeader>
                                <Cdate>27/01/2023</Cdate>
                                <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                                </FlexDiv>
                            </Columndiv>
                        </MyPost>

                        <MyPost>
                            <CIMG></CIMG>
                            <Columndiv>
                                <CHeader>Blog 1</CHeader>
                                <Cdate>27/01/2023</Cdate>
                                <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                                </FlexDiv>
                            </Columndiv>
                        </MyPost>

                        <MyPost>
                            <CIMG></CIMG>
                            <Columndiv>
                                <CHeader>Blog 1</CHeader>
                                <Cdate>27/01/2023</Cdate>
                                <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                                </FlexDiv>
                            </Columndiv>
                        </MyPost>
                        
                        
                        <ManageCTA>Manage My Posts</ManageCTA>
                    </MyDiv>

                    <CreateDiv>
                        <CreateHeader>Create New Blog!</CreateHeader>
                        <CreateCTA>Create</CreateCTA>
                    </CreateDiv>
            </AsideDiv>

            <ViewDiv>
            <AdminHeader>Latest Posts</AdminHeader>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewCard>
                    <CIMG></CIMG>
                    <Columndiv>
                        <CHeader>Blog 32</CHeader>
                        <Cdate>22/12/2022</Cdate>
                        <FlexDiv>
                                    <CAuthorImg></CAuthorImg>
                                    <CAuthor>Simon Pierces</CAuthor>
                        </FlexDiv>
                        
                    </Columndiv>
                    <Columndiv>
                    <Adminposted>Admin: Zaykha</Adminposted>
                    <AdminCreated>Created: 11/12/2022</AdminCreated>
                    </Columndiv>
                </ViewCard>
                <ViewMore></ViewMore>
            </ViewDiv>
            
            
        </Dashboard>
    </>
  )
}

export default AdminDashBoard