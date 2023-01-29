import React from 'react'
import { 
  AboutUs,
  Companyaddress, 
  Companycontent, 
  Companydetail, 
  Companyemail, 
  Companyhotline, 
  CompanyLogo, 
  Copyrights, 
  FooterCopyright, 
  FooterInnerdiv, 
  FooterOuterdiv, 
  QLinks, 
  QLinksdiv, 
  QuickLinks,
  SocialMedias
} from './Footerstyle'

const Footer = () => {
  return (
    <FooterOuterdiv>
      <FooterInnerdiv>

        <Companydetail>
          <CompanyLogo>KBZ</CompanyLogo>
          <Companycontent>
              <Companyaddress>No.615/1, Pyay Road, Kamayut Township, Yangon City, Myanmar</Companyaddress>
              <Companyemail>Support: admin@kbzmoney.com</Companyemail>
              <Companyhotline>Hotline: +959 7980 65880</Companyhotline>
          </Companycontent>
        </Companydetail>

        <QuickLinks>
          Quick Links
          <QLinksdiv>
              <QLinks>Home</QLinks>
              <QLinks>Services</QLinks>
              <QLinks>AML Technology</QLinks>
              <QLinks>Crypto Currencies</QLinks>
              <QLinks>Resources</QLinks>
              <QLinks>Contact</QLinks>
              <QLinks>About Us</QLinks>
              <QLinks>Client Support</QLinks>
              <QLinks>Alerts</QLinks>
          </QLinksdiv>
        </QuickLinks>

        <AboutUs>
          About Us
          
            <QLinks>Discliamer</QLinks>
            <QLinks>Privacy Policy</QLinks>
            <QLinks>Terms of Services</QLinks>
            <QLinks>Carrier</QLinks>
          
          

        </AboutUs>
      </FooterInnerdiv>

      <FooterCopyright>

        <Copyrights>Copyright &#169; 2023 KBZ Money. All Rights Reserved.</Copyrights>
        <SocialMedias>

        </SocialMedias>

      </FooterCopyright>

    </FooterOuterdiv>
  )
}

export default Footer