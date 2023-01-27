import React from 'react'
import { 
    Contentdiv, 
    ContentHeader2, 
    ContentImg, 
    Contentphrase2, 
    Imgdiv, 
    InnerdivContent, 
    OuterdivContent 
} from '../Details/Detailsstyle'
import { CTAButton } from '../Hero/Herostyle';
import circuitboard from '../../../assets/CircuitBoard.svg'
import platformimg from '../../../assets/PlatformImg.svg'


const PlatformCTA = () => {
  return (
    <OuterdivContent>
        <ContentImg src={circuitboard}></ContentImg>
        <InnerdivContent>
          
          <Contentdiv>
            <ContentHeader2>AML Compass Technology Platforms</ContentHeader2>
            <Contentphrase2>
              Our proprietary AML Compass Suite is a fully automated compliance solution for banks and non-bank financial institutions
              including hedge funds, broker dealers, insurance companies, and domestic and international MSBs that have regulatory reporting and control...
            </Contentphrase2>
            <CTAButton>Learn More</CTAButton>
          </Contentdiv>
          <Imgdiv src={platformimg}></Imgdiv>
          </InnerdivContent>
    </OuterdivContent>
  )
}

export default PlatformCTA