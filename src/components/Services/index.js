import React from 'react'
import {ServicesContainer,ServicesCard,Servicesh1,Servicesh2,ServicesIcon,Servicesp,ServicesWrapper, Servicesbg} from './ServiceElements';
import webdesign from '../../Icons/webdesing.svg';
import UIdesign from '../../Icons/UIdesign.svg';
import GraphicDesign from '../../Icons/graphicDesign.svg';
import Backend from '../../Icons/backend.svg';
import ContentWriting from '../../Icons/contentcreator.svg';
import AppDeveloper from '../../Icons/Appdevelopment.svg';
import servicesbg from '../../Icons/Servicesbg.jpg'

const Services = () => {
    return (
        <ServicesContainer id="services" style={{backgroundImage: `url(${servicesbg})`}}> 
        
            <Servicesh1>My Services</Servicesh1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={webdesign}></ServicesIcon>
                <Servicesh2>Web Design</Servicesh2>
                <Servicesp>
                    Web Designing is my speciality.
                </Servicesp>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={GraphicDesign}></ServicesIcon>
                <Servicesh2>Graphic Design</Servicesh2>
                <Servicesp>
                    Adept in Illustration and designing
                </Servicesp>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={UIdesign}></ServicesIcon>
                <Servicesh2>UI/UX Design</Servicesh2>
                <Servicesp>
                    Skilled in Interactive, Visual Design principle on websites.
                </Servicesp>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Backend}></ServicesIcon>
                <Servicesh2>Back-End Development</Servicesh2>
                <Servicesp>
                    I have deep knowledge of Java/J2EE with Hibernate and Spring.
                </Servicesp>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={ContentWriting}></ServicesIcon>
                <Servicesh2>Content Writing</Servicesh2>
                <Servicesp>
                    Specialize in planning writing and editing web content
                </Servicesp>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={AppDeveloper}></ServicesIcon>
                <Servicesh2>App Development</Servicesh2>
                <Servicesp>
                   Expertised in Interactive games,Media players and Global navigation.
                </Servicesp>
            </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
