import React from 'react'

const Footer = () => {
  return (
    <FooterOuterdiv>
      <FooterInnerdiv>

        <Companydetail>
          <CompanyLogo></CompanyLogo>
          <Companycontent>
              <Companyaddress></Companyaddress>
              <Companyemail></Companyemail>
              <Companyhotline></Companyhotline>
          </Companycontent>
        </Companydetail>

        <QuickLinks>

          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>

        </QuickLinks>

        <AboutUs>

          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>
          <QLinks></QLinks>

        </AboutUs>
      </FooterInnerdiv>

      <FooterCopyright>

        <Copyrights></Copyrights>
        <SocialMedias></SocialMedias>

      </FooterCopyright>

    </FooterOuterdiv>
  )
}

export default Footer