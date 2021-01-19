import React,{useState }from 'react'
import  SideBar  from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import FrontSection from '../components/FrontSection';
// import InfoSection from '../components/InfoSection';
import {homeObjFour, homeObjOne} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Works from '../components/Works';
import Skills from '../components/Skills';
import  ContactForm  from '../components/Contactform';
import AboutPage from '../components/AboutForm';


const Home = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle =() =>{
        setIsOpen(!isOpen)
    }
    
    
    return (
        <div>
        <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <FrontSection />
            <AboutPage /> 
            <Skills />
            <Services/>   
            <Works/>
            <ContactForm/>
            <Footer/>
            </div>
    )
}

export default Home