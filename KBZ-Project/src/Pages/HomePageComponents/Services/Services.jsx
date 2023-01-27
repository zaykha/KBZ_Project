import React from 'react'
import { ContentImg } from '../Details/Detailsstyle'
import { 
    SDescription,
    ServicesCard,
    ServicesCardDiv,
    ServicesDiv,
    ServicesHeader,
    ServicesImg,
    ServicesPhrase
} from './Servicesstyle';
import animatedshape2 from '../../../assets/AnimatedShape2.svg'

const Services = () => {
  return (
    <ServicesDiv>
        <ContentImg src={animatedshape2}></ContentImg>
        <ServicesHeader>Our Services</ServicesHeader>
        <ServicesPhrase>KBZ Money leverages technology and our extensive experience to create 
            solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
        </ServicesPhrase>
        <ServicesCardDiv>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Consulting</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Licensing</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Training</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Correspondent Account</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Independent AML/BSA Reviews</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg></ServicesImg>
                <SDescription>Look Back Reviews</SDescription>
            </ServicesCard>
            
        </ServicesCardDiv>
    </ServicesDiv>
  )
}

export default Services