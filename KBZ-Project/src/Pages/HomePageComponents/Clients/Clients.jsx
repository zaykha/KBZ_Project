import React from 'react'
import { 
    CDescription,
    CDescriptionHeader,
    ClientCard,
    ClientCardDiv,
    ClientDiv, ClientHeader, ClientImg, ClientPhrase 
} from './Clientsstyle'

const Clients = () => {
  return (
    <ClientDiv>
        <ClientHeader>Our Clients and Footprint</ClientHeader>
        <ClientPhrase>Clients include Banks, Non-Banking Financial Institutions, 
            Non-Financial Institutions, Insurance Companies, Broker Dealers, 
            Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, 
            and Crypto Currency Solution Companies including Exchanges and Market Places.</ClientPhrase>
        <ClientCardDiv>
            <ClientCard>
                <ClientImg></ClientImg>
                <CDescriptionHeader>North America & Carribbean</CDescriptionHeader>
                <CDescription>
                    <ul>
                        <li>United State</li>
                        <li>Mexico</li>
                        <li>Dominican Republic</li>
                        <li>Jamaica</li>
                    </ul>
                </CDescription>
            </ClientCard>
            <ClientCard>
                <ClientImg></ClientImg>
                <CDescriptionHeader>Central & South America</CDescriptionHeader>
                <CDescription>
                    <ul>
                        <li>Costa Rica</li>
                        <li>El Salvador</li>
                        <li>Panama</li>
                        <li>Venezuela</li>
                        <li>Ecuador</li>
                        <li>Chile</li>
                        <li>Argentina</li>
                        <li>Colombia</li>
                        <li>Uruguay</li>
                    </ul>
                </CDescription>
            </ClientCard>
            <ClientCard>
                <ClientImg></ClientImg>
                <CDescriptionHeader>Europe & Africa</CDescriptionHeader>
                <CDescription>
                    <ul>
                        <li>United Kingdom</li>
                        <li>Spain</li>
                        <li>Bulgaria</li>
                        <li>Ethiopia</li>
                        <li>Somalia</li>
                        <li>Cote de Ivory</li>
                        <li>Djibouti</li>
                    </ul>
                </CDescription>
            </ClientCard>
            <ClientCard>
                <ClientImg></ClientImg>
                <CDescriptionHeader>Middle East & Far East</CDescriptionHeader>
                <CDescription>
                    <ul>
                        <li>Isreal</li>
                        <li>Saudi Arabia</li>
                        <li>Dubai</li>
                        <li>Philippines</li>
                    </ul>
                </CDescription>
            </ClientCard>
        
    </ClientCardDiv>
    </ClientDiv>
        
  )
}

export default Clients