import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
    padding: 80px 0px;

    @media screen and (max-width: 820px) {
        padding: 40px 0px;
    }
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    justify-content: center;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    box-sizing: border-box;
    text-align: left;
    width: 160px;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 70px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    width: 50%;
    text-align: center;
    transform: rotate(-20deg);
    padding-bottom: 60px;

    &:hover {
        transform: scale(1.02) rotate(-20deg);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 820px) {
        font-size: 54px;
    }

    @media screen and (max-width: 460px) {
        font-size: 36px;
    }
`

export const WebsiteRights = styled.div`
    color: #fff;
    margin-bottom: 16px;
    font-size: 18px;
    padding: 50px 20px;
    width: 25%;
    text-align: center;

    @media screen and (max-width: 820px) {
        padding: 26px 0px;
        width: 50%;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    width: 240px;
    flex-direction: column;
    padding: 3%;

    @media screen and (max-width: 768px) {
        padding: 0;
        width: 50%;
        align-items: center;
    }
`

export const SocialIconLink = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 32px;
    text-decoration: none;
    margin-bottom: 16px;

    &:hover {
        color: #ff9e1f;
    }
`

export const IconText = styled.span`
    font-size: 26px;
    margin-left: 14px;
`