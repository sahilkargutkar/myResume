import React,{useState} from 'react'
import Video from '../../videos/video1.mp4'
import {Button} from '../ButtonElements'
import { FrontContainer,FrontBg,VideoBg ,
    FrontContent,Fronth1,FrontBanner,Frontp,FrontBtnWrapper,ArrowBottom,ArrowCircle} from "./FrontElements";


const FrontSection = () => {
    const[hover,setHover] =useState(false);

    const onHover=() =>{
        setHover(!hover)
    }




    return (
        <FrontContainer id="home">
        <FrontBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </FrontBg>  
            <FrontContent>
                <FrontBanner>
                <Fronth1>I'm Sahil Kargutkar </Fronth1>
                <Frontp>I'm a Mumbai based Full-stack Developer,I'm skilled in Java Core and Advance.
                    I have developed many websites and also worked on many Projects.</Frontp>

                    
                    </FrontBanner>
                    <FrontBtnWrapper>
                    <Button to="about"  smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    onMouseEnter={onHover} onMouseLeave={onHover}>Explore{hover ?<ArrowCircle/>:<ArrowBottom />}</Button>

                    </FrontBtnWrapper>
                </FrontContent>          
        </FrontContainer>
    )
}

export default FrontSection