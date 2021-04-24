import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaTwitter, FaTelegram } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons, IconText } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer id="community">
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Join the Community of MEME Token!
                        </SocialLogo>
                        <WebsiteRights> shibaken © {new Date ().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://t.me/shibakens' target='_blank' aria-label='Telegram'>
                                <FaTelegram />
                                <IconText>Telegram</IconText>
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com/ShibakenFinance' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                                <IconText>Twitter</IconText>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
