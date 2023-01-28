import React from 'react'
import { Contentdiv, ContentHeader2, InnerdivContent } from '../Details/Detailsstyle'
import { CTAButton } from '../Hero/Herostyle'
import { OuterdivNewsletter } from './Newslettersubstyle'

const Newslettersub = () => {
  return (
    <OuterdivNewsletter>
    
    <InnerdivContent>
      
      <Contentdiv>
        <ContentHeader2>Subscribe Newslatter & get KBZ Money ALerts</ContentHeader2>
      </Contentdiv>

      <Contentdiv>
        <input type="text" name="" id="" placeholder="Email address"/>
        <CTAButton>Subscribe</CTAButton>
      </Contentdiv>

      </InnerdivContent>
    </OuterdivNewsletter>
  )
}

export default Newslettersub