import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000':'transparent')} ;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const ImgLogo = styled.img`
    width: 50px;
    margin-right: 10px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 33px;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks =  styled(LinkS) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ff9e1f; 
    }

    &:hover {
        color: #ff9e1f;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.a`
    padding-bottom: 3px;
    box-shadow: 0 2px 0 #fff;
    border-radius: 15px 250px 15px 250px/250px 15px 250px 15px;;
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-image: url('data:image/gif;base64,R0lGODlhBAAEAPAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQBFAABACwAAAAABAAEAAACBgQSl2h5BQA7');

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000;
    }

    &:active {
        box-shadow: 0 1px 0 #000;
        padding-bottom: 0;
        top: 4px;
    }
`

export const NavBtnSpan = styled.span`
    background: #010606;
    display: block;
    padding: 5px 15px;
    border: 2px solid #fff;
    border-radius: 15px 250px 15px 250px/250px 15px 250px 15px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`