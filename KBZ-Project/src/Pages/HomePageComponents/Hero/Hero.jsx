import React from 'react'
import { BGcolor, CTADiv, HeroIMG, Outerdiv, CTAButton, Heroh1, Herosmall, Colorspan } from './Herostyle'
import Heroimage from '../../../assets/HeroImage.svg'

const Hero = () => {
  return (
    <>
    <BGcolor></BGcolor>
    <Outerdiv>
        <CTADiv>
            <Heroh1>
                <Colorspan>KBZ Money </Colorspan> compass anti money laundering technology and services redefined</Heroh1>
            <Herosmall> KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership</Herosmall>
            <CTAButton>Get Started</CTAButton>
        </CTADiv>
        <HeroIMG src={Heroimage}></HeroIMG>
    </Outerdiv>
    </>
  )
}

export default Hero