import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SideBtnSpan } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="ecosystem" onClick={toggle}>
                        Ecosystem
                    </SidebarLink>
                    <SidebarLink to="home" onClick={toggle}>
                        Buy SHIBAKEN
                    </SidebarLink>
                    <SidebarLink to="comunnity" onClick={toggle}>
                        Community
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href='https://t.me/shibakens' target='_blank'>
                        <SideBtnSpan>
                            Telegram
                        </SideBtnSpan>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
