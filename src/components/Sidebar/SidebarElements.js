import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-self: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled.a`
    padding-bottom: 3px;
    box-shadow: 0 2px 0 #fff;
    border-radius: 15px 250px 15px 250px/250px 15px 250px 15px;;
    white-space: nowrap;
    color: #fff;
    font-size: 20px;
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

export const SideBtnSpan = styled.span`
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