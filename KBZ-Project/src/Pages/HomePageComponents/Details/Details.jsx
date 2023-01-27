import React from 'react'
import { 
  Contentdiv,
  ContentHeader,
  Contentphrase,
  ContentHeader2,
  Contentphrase2,
  Imgdiv,
  OuterdivContent,
  OuterdivContent1,
  Stats, 
  StatsCard, 
  Statscontent, 
  StatsHeader, 
  Statsimg, 
  StatsLink, 
  Statsphrase,
  InnerdivContent,
  ContentImg } from './Detailsstyle'

import Contentimg1 from '../../../assets/Content1Img.svg'
import Contentimg2 from '../../../assets/Content2Img.svg'
import Contentimg3 from '../../../assets/Content3Img.svg'
import Contentbg from '../../../assets/AnimatedShape.svg'
import { CTAButton } from '../Hero/Herostyle'

const Details = () => {
  return (
    <>
        <Stats>

          <StatsCard>
            <Statsimg></Statsimg>
            <Statscontent>
              <StatsHeader>
                AML Technology
              </StatsHeader>
              <Statsphrase> 
                KBZ Money's AML Compass Platform combines cutting-edge technology and...
              </Statsphrase>
              <StatsLink>Get Started</StatsLink>
            </Statscontent>
          </StatsCard>

          <StatsCard>
            <Statsimg></Statsimg>
            <Statscontent>
              <StatsHeader>
                AML Outsourcing
              </StatsHeader>
              <Statsphrase> 
                Compliance as a Service TM or Cas delivers not just systems through its AML Compass...
              </Statsphrase>
              <StatsLink>Get Started</StatsLink>
            </Statscontent>
          </StatsCard>

          <StatsCard>
            <Statsimg></Statsimg>
            <Statscontent>
              <StatsHeader>
                Crypto Currencies
              </StatsHeader>
              <Statsphrase> 
                The Crypto currency market is one of the most exciting and rapidly developing...
              </Statsphrase>
              <StatsLink>Get Started</StatsLink>
            </Statscontent>
          </StatsCard>

        </Stats>

        <OuterdivContent1>
          <InnerdivContent>
          <Imgdiv src={Contentimg1}></Imgdiv>
          <Contentdiv>
            <ContentHeader>The Current Challenges</ContentHeader>
            <Contentphrase> Legal requirements and recent developments compel financial Institutions 
              to adopt comprehensive and effective risk-based controls to prevent misuse by money 
              launderers or purveyors of terrorist acts.
              <br/>
              <br/>

              Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs
              for companies in the financial services space.
              <br/>
              <br/>

              Untested, rubber stamp solutions adopted to appease regulators will not do in today's environment.
              </Contentphrase>
          </Contentdiv>
          </InnerdivContent>
        </OuterdivContent1>

        <OuterdivContent>
          <ContentImg src={Contentbg}></ContentImg>
        <InnerdivContent>
        <Contentdiv>
            <ContentHeader2>Our Solutions</ContentHeader2>
            <Contentphrase2>
              KBZ Money Leverages technology and our extensive experience to create solutions that are forward thinking, 
              anticipatory, holistic, and most importantly, effective.
              <br/>
              <br/>
              KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA
              and OFAC compliance solutions to financial institutions the world over.
              <br/>
              <br/>
              Our deployment strategies are tailored to meet the individual needs of our clients in the context of
              a risk-laden world. Our approach is to provide the most protection in the most intelligent, effective and cost-efficient manner.
            </Contentphrase2>
          </Contentdiv>
          <Imgdiv src={Contentimg2}></Imgdiv>
        </InnerdivContent>   
        </OuterdivContent>

        <OuterdivContent>
        <InnerdivContent>
          <Imgdiv src={Contentimg3}></Imgdiv>
          <Contentdiv>
            <ContentHeader>Why We Stand Out in the Industry</ContentHeader>
            <Contentphrase>
              KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership,
              innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East
              and the Far East. Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions
              to our clients in a dynamic and fast-changing regulatory landscape.
            </Contentphrase>
            <CTAButton>Learn More</CTAButton>
          </Contentdiv>
          
        </InnerdivContent>
        
        </OuterdivContent>
        
    </>
  )
}

export default Details