import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #27ABFC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 768px) {
        padding: 0px 8px;
    }
`

export const HeroBg = styled.div`
    display: flex;
    max-width: 1050px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

export const HeroLogo = styled.div`
    width: 30%;
`

export const HeroImg = styled.img`
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 38px;
    }

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 26px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
`

export const ButtonWrapper = styled.a`
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
    margin-right: 10px;
    background-image: url('data:image/gif;base64,R0lGODlhBAAEAPAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQBFAABACwAAAAABAAEAAACBgQSl2h5BQA7');

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000;
    }

    &:active {
        box-shadow: 0 2px 0 #000;
        padding-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const BtnSpan = styled.span`
    background: #010606;
    display: block;
    padding: 10px 28px;
    border: 2px solid #fff;
    border-radius: 15px 250px 15px 250px/250px 15px 250px 15px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }

    @media screen and (max-width: 768px) {
        padding: 6px 24px;
    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
