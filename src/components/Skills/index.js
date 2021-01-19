import React from 'react'
import react from 'react-dom'
import { ProgressClass,SkillsContainer,ProgressDone,Skillsh2,SkillsWrapper,SkillsCard,Skillsh1, } from '../Skills/SkillElements'
import educhart1 from '../../Icons/educhart1.jpg'
import bargraph from '../../Icons/bargraph.png'
import Skillsbg from '../../Icons/skills.jpg'

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<ProgressClass>
			<ProgressDone style={style}>
				{done}%
			</ProgressDone>
		</ProgressClass>
	)
}


const Skills= () => {
    return (
      
       
        <SkillsContainer id="skills" style={{backgroundImage: `url(${Skillsbg})`}}>
              
        <Skillsh1>Skills</Skillsh1>
    
            <SkillsWrapper>
            <SkillsCard>
            
            <Skillsh2>HTML/CSS</Skillsh2>
            <Progress  done="85"/>
            <br />
            <Skillsh2>JavaScript</Skillsh2>
            <Progress done="80"/>
            <br />
            <Skillsh2>Java Core and Advance</Skillsh2>
            <Progress done="90"/>
            <br />
            <Skillsh2>SQL</Skillsh2>
            <Progress done="90"/>
            <br />
            <Skillsh2>M.E.R.N.</Skillsh2>
            <Progress done="70"/>
            
            

            </SkillsCard>

            <SkillsCard> 
            <Skillsh2>Time Management</Skillsh2>
            <Progress  done="85"/>
            <br />  
            <Skillsh2>Networking</Skillsh2>
            <Progress done="80"/>
            <br />
            <Skillsh2>Teamwork</Skillsh2>
            <Progress done="90"/>
            <br />
            <Skillsh2>Creative thinking</Skillsh2>
            <Progress done="90"/>
            <br />
            <Skillsh2>Conflict Resolution</Skillsh2>
            <Progress done="70"/>




            </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>

       
    )
}

export default Skills
