import styled from "styled-components";
import footerbg from '../../assets/footerbg.svg'

export const FooterOuterdiv = styled.div`
    width: 100%;
    // padding: 20px;
    display: flex;
    // align-items: center;
    // justify-content: center;
    flex-direction: column;
    background:url(${footerbg}) center no-repeat ;
    // 
    background-size: cover;
    // overflow: hidden;
`;
export const FooterInnerdiv = styled.div`
    width: 70%;
    // height: 300px;
    display: flex;
    flex-wrap:wrap;
    // align-items: center;
    // justify-content: center;
    margin: 40px auto;
    // border: 1px solid red;
`;
export const Companydetail = styled.div`
    color: white;
    text-align: left;
`;
export const CompanyLogo = styled.div`
    font-size: 2rem;
    margin: 20px;
    
`;
export const Companycontent = styled.div`
    font-size: 0.9rem;
    margin: 20px;
`;
export const Companyaddress = styled.div`
`;
    
export const Companyemail = styled.div`
`;
export const Companyhotline = styled.div`
`;
export const QuickLinks = styled.div`
    font-size: 1.2rem;
    text-align: left;
    color: white;
    margin: 20px auto 40px auto;
`;
export const QLinksdiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;
export const QLinks = styled.div`
    width: 50%;
    font-size: 0.8rem;
    margin: 10px 0;
`;
export const AboutUs = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    font-size: 1.2rem;
    text-align: left;
    color: white;
    margin: 20px auto 40px auto;
    color: white;
    width: 35%;
    margin: 20px;

    // border: 1px solid red;
`;
export const FooterCopyright = styled.div`
    width: 80%;
    height: 100px;
    border-top: 1px solid gray;
    margin: auto;
    color: white;
`;
export const Copyrights = styled.div`
    display: relative;
    left: 0;
`;
export const SocialMedias = styled.div`
    display: relative;
    right: 0;
`;