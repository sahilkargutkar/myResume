import React from 'react'
import{FooterContainer,FooterWrap,FooterLinksContainer,SocialMedia,SocialMediaWrap,
    SocialIconLink,SocialLogo,WebsiteRights,SocialIcons} from'./FooterElements'
import {FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaCoffee} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
             <FooterWrap>
                <FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/"></SocialLogo>
                            {/* <WebsiteRights>Sahil © {new Date().getFullYear()}All Rights Reserved.</WebsiteRights> */}
                        <SocialIcons>
                            <SocialIconLink href="http://facebook.com/sahil.kargutkar.58"  aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="http://github.com/sahilkargutkar" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                            <SocialIconLink href="http://linkedin.com/in/sahilkar99" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="http://Instagram.com/optimemeist" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="https://www.buymeacoffee.com/Elusion" arial-label="Coffee"><FaCoffee/></SocialIconLink>
                       
                        </SocialIcons>
                       
                        </SocialMediaWrap>

                    </SocialMedia>

                </FooterLinksContainer>

             </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
