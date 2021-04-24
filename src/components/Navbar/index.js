import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, ImgLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnSpan } from './NavbarElements'
import img from '../../images/shibaken.svg'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState (false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <ImgLogo src={img}/>
                            Shiba Ken
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='ecosystem' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Ecosystem</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Buy SHIBAKEN</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='community' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Community</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink href='https://t.me/shibakens' target='_blank'>
                                <NavBtnSpan>Telegram</NavBtnSpan>
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
