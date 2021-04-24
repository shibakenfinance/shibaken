import React from 'react'
import img from '../../images/shibakenlogo.svg'
import { HeroContainer, HeroBg, HeroLogo, HeroImg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ButtonWrapper, BtnSpan } from './HeroElements'

const HeroSection = () => {
    
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <HeroContent>
                    <HeroH1>SHIBA KEN FINANCE</HeroH1>
                    <HeroP>
                    Shiba Ken 芝けん ( SHIBAKEN ) is building a community-focused decentralized transaction network. SHIBAKEN is fully decentralized, and all decisions are made by the community.
                    </HeroP>
                    <HeroBtnWrapper>
                        <ButtonWrapper href='https://app.uniswap.org/#/swap?outputCurrency=0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b' target='_blank'>
                            <BtnSpan>
                                Buy On Uniswap
                            </BtnSpan>
                        </ButtonWrapper>
                        <ButtonWrapper href='https://www.dextools.io/app/uniswap/pair-explorer/0x420cf323d2c19ed37b3a24093fd29da3733e7e58' target='_blank'>
                            <BtnSpan>
                                DEXTools
                            </BtnSpan>
                        </ButtonWrapper>
                    </HeroBtnWrapper>
                </HeroContent>
                <HeroLogo>
                    <HeroImg src={img}/>
                </HeroLogo>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
