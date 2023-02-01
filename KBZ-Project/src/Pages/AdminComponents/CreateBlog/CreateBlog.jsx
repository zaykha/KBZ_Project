import React,{ useState, useRef, useEffect }  from 'react'
import { CreateCTA, Dh3, FlexDiv } from '../AdminDashBoard/ADBstyle'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { CInput, Clabel, Container, CTextArea, FileInputdiv, ImgInput, Imglabel, Imglabeluploaded, UploadCTA } from './CreateBlogstyle'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db, storage } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const CreateBlog = ({isAuth}) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const togglesidebar = () => {
       setIsOpen(!isOpen);
    }  
  useEffect(()=>{
    if(!isAuth){
      Navigate('/adminPage')
    }
  })
  const Navigate = useNavigate();
  const currentTime = new Date().toDateString();

  //for image
  const [image, setImage] = useState(null);
  const [authorImage, setauthorImage] = useState(null);
  

  const handleImageChange = e => {
    setImage(e.target.files[0]);
    
  };
  const handleAuthorImageChange = e => {
    setauthorImage(e.target.files[0]);
    
  };
  const handleUpload = () => {
    const Imagechecker = image.name.slice(0,-4);
    
    if(image === ''){
      alert('please upload an image');
    } else if (Imagechecker!= formobj.title){
      alert('please change name of image to same as title and only use PNG');
    }else{
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image);
      setImage('uploaded');  
    }
  };
  const handleAuthorUpload = () => {
    const Imagechecker = authorImage.name.slice(0,-4);
    
    if (authorImage == null){
      alert('please upload an image')
    };
    if (Imagechecker!= formobj.author){
      alert('please change name of image to same as Author name and only use PNG');
    }else{
      const imageRef = ref(storage, `images/${authorImage.name}`);
      uploadBytes(imageRef, authorImage);
      setauthorImage('uploaded');
    } 
  };
  const [formobj, setformobj] = useState({
    title:'',
    tag:'',
    category:'',
    author:'',
    authoreddate:'',
    content:'',
    textareaexpand:'',
    currenttime:''
  });
  const textareaRef = useRef(null);

  const BlogCollectionRef = collection(db, 'blog');

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [formobj]);

  const handleformChange = (prop) => (event) => {
    setformobj({ ...formobj, [prop]: event.target.value });
  };

  const CreatePost = async()=>{
    if(formobj.title === '' || formobj.tag === '' || formobj.category ==='' || formobj.author ==='' || formobj.authoreddate === '' || formobj.content === ''||image !== 'uploaded'|| authorImage !== 'uploaded'){
      console.log(formobj)
      alert('Upload the Images and Fill the emply field');
      return false;
    }else{
      try{ await addDoc(BlogCollectionRef,
      {
        title: formobj.title,
        tag: formobj.tag,
        category: formobj.category,
        author: formobj.author,
        authoreddate: formobj.authoreddate,
        content: formobj.content,
        timestamp: currentTime,
        Admin: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      }  
      )
      alert('Post successfully uploaded')
      Navigate('/adminDashBoard');
    }
      catch(error){
        console.log(error);
      }
    
  }
}
  return (
    <>
      <AdminSidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
        <AdminNavbar togglesidebar={togglesidebar}/>
      <Dh3>Create a Blog</Dh3>

      <Container>
        {image === "uploaded" ? 
        <div>
        <Imglabeluploaded>Title Image Uploaded</Imglabeluploaded>
        </div>:
        <FileInputdiv>
          <Imglabel htmlFor="input-file" >
              Upload Title Image
            
          </Imglabel>
          <FlexDiv>
          <ImgInput 
            name="input-file"
            type="file" 
            onChange={handleImageChange}
            accept="image/*" 
            />
            <UploadCTA onClick={handleUpload}>Upload</UploadCTA>
            </FlexDiv>
          </FileInputdiv>
        }
          

          <Clabel htmlFor='title'>Title:</Clabel>
          <CInput 
          name='title'
          type='text'
          onChange={handleformChange('title')}
          />
        
          <Clabel>Tag:</Clabel>
          <CInput
          name='tag'
          type='text'
          onChange={handleformChange('tag')}
          />

          <Clabel>Category:</Clabel>
          <CInput 
          name='categoty'
          type='text'
          onChange={handleformChange('category')}
          />

        {authorImage === "uploaded" ? 
        <div>
        <Imglabeluploaded>Author Image Uploaded</Imglabeluploaded>
        </div>:
        <FileInputdiv>
          <Imglabel htmlFor="input-file" >
              Upload Author Image
          </Imglabel>
          <FlexDiv>
          <ImgInput 
            name="input-file"
            type="file" 
            onChange={handleAuthorImageChange}
            accept="image/*" 
            />
            <UploadCTA onClick={handleAuthorUpload}>Upload</UploadCTA>
            </FlexDiv>
          </FileInputdiv>
        }
          <Clabel>Author:</Clabel>
          <CInput 
          name='author'
          type='text'
          onChange={handleformChange('author')}
          />
        
        
          <Clabel >Authored date:</Clabel>
          <CInput 
          name='authoreddate'
          type='date'
          onChange={handleformChange('authoreddate')}
          />
        
          <Clabel>Content:</Clabel>
          <CTextArea
           ref={textareaRef}
           onChange={handleformChange('content')}

          />
        <CreateCTA onClick={CreatePost}> Post</CreateCTA>
      </Container>
    </>
  )
}

export default CreateBlog