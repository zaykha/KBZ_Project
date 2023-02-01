import React, { useEffect, useState } from 'react'
import { Dh3 } from '../AdminDashBoard/ADBstyle'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db, storage } from '../../../firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { 
  Columndiv,
  FlexDiv,
  MAdminCreated,
  MAuthor,
  MAuthorImg,
  Mdate,
  MHeader,
  MIMG,
  MineCard,
  MineDiv 
} from './MyBlogsstyle'
import { async } from '@firebase/util';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MyBlogs = () => {
  const [postList, setpostList] = useState([]);
  const [ImgList, setImgList] = useState(null);
  const [urllink, seturllink] = useState([]);
  const [loading, setLoading]= useState(false);
  const BlogCollectionRef = collection(db,'blog');
  
  const [isOpen, setIsOpen] = useState(false);
  
    const togglesidebar = () => {
       setIsOpen(!isOpen);
    }  

  const getPosts = async()=>{
    setLoading(false);
    const data = await getDocs(BlogCollectionRef);
    setpostList(data.docs.map((doc)=>({...doc.data()})));
    setLoading(false);
  }
  
  
  // showlist.then((items)=>{
  //   items.items.map((a)=>{
  //     console.log(a._location.path_);
  //   });
  // })
  const getImagearray = async()=>{
    const listRef = ref(storage, 'images');
    const showlist =  listAll(listRef);
    await showlist.then((res)=>{
      res.items.forEach((itemRef) => {
        getDownloadURL(ref(storage,itemRef._location.path_ )).then((res)=>{
          seturllink([...urllink,res]);
          
        })
      });
    });
    console.log(urllink)
  }
  
 
  const generateURL=( props )=>{
    const ImageRef = ref(storage, `images/${props}.png`);
    const ImgURL = getDownloadURL(ImageRef).then((url)=>{
      setImgList(url);
      console.log(ImgURL)
    })
  }
  
  useEffect(()=>{
    getPosts();
    getImagearray();
  },[]);
  // 
  return (
    <>
   <AdminSidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <AdminNavbar togglesidebar={togglesidebar}/>
    <Dh3>Manage Posts</Dh3>
    
      <MineDiv> 
        {postList.length === 0? <h3>No Post Added</h3>:postList.map((post)=>(
          <MineCard key={post.id}>
           
          <MIMG 
          src={ImgList}
          ></MIMG>
          <Columndiv>
            <MHeader>{post.title}</MHeader>
              <Mdate>{post.authoreddate}</Mdate>
                <FlexDiv>
                 <MAuthorImg></MAuthorImg>
                 <MAuthor>{post.author}</MAuthor>
                 </FlexDiv>      
                      </Columndiv>
                      <MAdminCreated>{post.timestamp}</MAdminCreated>
                  </MineCard>
                  )
        )
        }
      
      </MineDiv>
    </>
  )
}

export default MyBlogs