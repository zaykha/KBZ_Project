import React,{useState} from 'react'
import { LoginBtn, LoginDiv, LoginForm, LoginHeader, LoginLogo, Password, Username } from './LoginPagestyle'
import Logopic from '../../../assets/kbz-bank-logosvg.svg'
import { auth } from '../../../firebase.jsx';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const LoginPage = ({setIsAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const Navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
          await signInWithEmailAndPassword(auth, email, password).then(
           response=>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            Navigate('/adminDashBoard');
           } 
          ).catch(error => {
            console.error(error);
          });
      };
  return (
    <>
        <LoginDiv>
        <LoginHeader>ADMIN LOGIN</LoginHeader>
                <LoginForm>
                    <LoginLogo src={Logopic}/>
                    <Username type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"/>
                    <Password type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"/>
                    <LoginBtn onClick={handleLogin}>Login</LoginBtn>
                </LoginForm>
                
        </LoginDiv>
    </>
  )
}

export default LoginPage