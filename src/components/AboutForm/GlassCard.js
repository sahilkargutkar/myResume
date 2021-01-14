import React from 'react'
import styled from 'styled-components'
// import {useSpring,animated,config} from 'react-spring';
import profile from '../../Icons/Screenshot1.png'
import Tilt from 'react-vanilla-tilt';



const Container = styled.div`
display: inline-block;
padding: 3em;
// background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
// backdrop-filter: blur(10px);
background-clip: border-box;
margin-top 50px;
padding:200px;
margin-bottom:400px;
border:50px;
`;

const StyledImg = styled.img`
    width: 232px;
    height: 217px;
    margin-left:133px;
    border: 2px solid #000;
    border-radius: 50%;
    
`;

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    :center;
    margin-left:130px;
    
`;

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    margin-left:100px;
`;

const Containerh1= styled.h1`
line-height:1.5;
font-size:27 px;
color:#fff;
margin-left:170px;
 margin-bottom:90px;
padding-top:40px;
// display:block;
padding-bottom:50px;

`
const ContianerClass=styled.div`

`
const Styledp=styled.p`
font-size:20px;
letter-height:1.15;
padding:10px;
margin-left:10px;    



`


const GlassCard = () => {

   
    
    return (
                    <ContianerClass>

                        
                    <Container id="about">
                    <Containerh1>About Me</Containerh1>
       
            <Tilt style={{ height: '450px',width:'500px',backdropFilter:'blur(4px)',boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',border:'2px solid transparent',borderRadius:'10px', backgroundColor: 'rgba(255,255,255,0.25)',cursor:'pointer' }}>
                
                <StyledImg src={profile} />
                <StyledH1>Sahil Kargutkar</StyledH1>
                <StyledH3> Designer and Full Stack Developer</StyledH3>
                <Styledp>I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as along with a team.I am adept in java core and advance as well as intermediate in Microservices. </Styledp>
                </Tilt>
                </Container>
                </ContianerClass>        
    )
}

export default GlassCard
