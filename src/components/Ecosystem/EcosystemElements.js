import styled from 'styled-components'

export const EcosystemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ff9e1f;
    padding: 60px 0px;

    @media screen and (max-width: 768px) {
        padding: 40px 8px;
    }

    @media screen and (max-width: 480px) {
        padding: 40px 10px;
    }
`

export const EcoContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const EcoLeft = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const EcoRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 30px 30px 30px 80px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 30px 20px;
        align-items: center;
    }
`

export const EcoLink = styled.a`
    display: flex;
    align-items: center;
    color: #010606;
    font-size: 32px;
    text-decoration: none;
    margin-bottom: 36px;

    &:hover {
        color: #fff;
    }
`

export const EcoSvg = styled.img`
    width: 60px;
`

export const EcoText = styled.h2`
    font-size: 22px;
    margin-left: 14px;
`

export const EcosystemWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const EcosystemCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 6px solid #010606;
    height: 300px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0.2);
    transition: all 0.2s ease-in-out;
    padding: 60px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const EcosystemIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const EcosystemH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 36px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const EcosystemH2 = styled.h2`
    font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 700;
`

export const EcosystemH3 = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`

export const EcosystemP = styled.p`
    font-size: 22px;
    text-align: center;
`
