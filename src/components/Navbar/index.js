import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../Icons/logo.jpg'
import Download from '../../pages/Download';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    
    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav (true)
        }else{
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)

    },[])

    const toggleHome =() =>{
        scroll.scrollToTop()

    }

    return (
        
          <Nav scrollNav={ scrollNav }>
              <NavbarContainer>
                <NavLogo to='/myResume' onClick={toggleHome}>
                𝓈𝒶𝒽𝒾𝓁 𝓀𝒶𝓇𝑔𝓊𝓉𝓀𝒶𝓇 
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                   </MobileIcon>
                <NavMenu>
                    <NavItem>
                    <NavLinks to='about'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="skills" 
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="services"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Services</NavLinks>
                    </NavItem>
                   
                    <NavItem>
                    <NavLinks to="works"
                    smooth={true} duration={500} spy={true} exact='true' offset={-70} >Works</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="contactme" smooth={true} duration={500} spy={true} exact='true' offset={-70}  >ContactMe</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink  download="/files/Resume(latest).pdf" >Download CV</NavBtnLink>
                </NavBtn>

              </NavbarContainer>
              </Nav>  
        
    )
}

export default Navbar
