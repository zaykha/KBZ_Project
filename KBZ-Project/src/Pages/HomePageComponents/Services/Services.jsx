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
import { Colorspan } from '../Hero/Herostyle';
import Consulting from '../../../assets/friend.png';
import licensing from '../../../assets/licensing.png';
import training from '../../../assets/coach.png';
import account from '../../../assets/user.png';
import independent from '../../../assets/feedback.png';
import reviews from '../../../assets/reviews.png';

const Services = () => {
  return (
    <ServicesDiv>
        <ContentImg src={animatedshape2}></ContentImg>
        <ServicesHeader>Our <Colorspan>Services</Colorspan></ServicesHeader>
        <ServicesPhrase>KBZ Money leverages technology and our extensive experience to create 
            solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
        </ServicesPhrase>
        <ServicesCardDiv>
            <ServicesCard>
                <ServicesImg src={Consulting}></ServicesImg>
                <SDescription>Consulting</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={licensing}></ServicesImg>
                <SDescription>Licensing</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={training}></ServicesImg>
                <SDescription>Training</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={account}></ServicesImg>
                <SDescription>Correspondent Account</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={independent}></ServicesImg>
                <SDescription>Independent AML/BSA Reviews</SDescription>
            </ServicesCard>
            <ServicesCard>
                <ServicesImg src={reviews}></ServicesImg>
                <SDescription>Look Back Reviews</SDescription>
            </ServicesCard>
            
        </ServicesCardDiv>
    </ServicesDiv>
  )
}

export default Services