import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarWrapper,SideBarMenu,SideBarLink,SideBtnWrap,SideBarRoute} from './SideBarElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
            <SideBarMenu>
            <SideBarLink to ="about" onClick={toggle}>About</SideBarLink>

            <SideBarLink to ="services" onClick={toggle}>Services</SideBarLink>

            <SideBarLink to ="skills" onClick={toggle}>Skills</SideBarLink>

            <SideBarLink to ="works" onClick={toggle}>Works</SideBarLink>

            <SideBarLink to ="contactme" onClick={toggle}>ContactMe</SideBarLink>

            <SideBtnWrap>
                <SideBarRoute to ='/download'>Download CV</SideBarRoute>
            </SideBtnWrap>

            </SideBarMenu>

            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar