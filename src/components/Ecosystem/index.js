import React from 'react'
import Icon1 from '../../images/burn.svg'
import Icon2 from '../../images/contract.svg'
import { EcosystemContainer, EcoContainer, EcoLeft, EcoRight, EcoLink, EcoSvg, EcoText, EcosystemH1, EcosystemH2, EcosystemH3, EcosystemWrapper, EcosystemCard, EcosystemP } from './EcosystemElements'

const Ecosystem = () => {
    return (
        <EcosystemContainer id='ecosystem'>
            <EcoContainer>
                <EcoLeft>
                    <EcosystemH1>Ecosystem</EcosystemH1>
                    <EcosystemH3>SHIBAKEN currently running into ethereum (ETH) Network with fully deflationary token that will appreciate with every single successive transaction. SHIBAKEN deflationary mechanisms include a burn and redistribution system. 1% of each transaction is burned, and 1% is distributed as rewards to holders.</EcosystemH3>
                </EcoLeft>
                <EcoRight>
                    <EcoLink href='https://etherscan.io/tx/0x2404c5ebf9e6ad3b528aeca2d9c24e3f57e71e51d716c9e3428cc6350e0549d7' target='_blank'>
                        <EcoSvg src={Icon1}/>
                        <EcoText>
                            100% LP Token Burned
                        </EcoText>
                    </EcoLink>
                    <EcoLink href='https://etherscan.io/address/0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b#code' target='_blank'>
                        <EcoSvg src={Icon2}/>
                        <EcoText>
                            Token Contract
                        </EcoText>
                    </EcoLink>
                </EcoRight>
            </EcoContainer>
            <EcosystemWrapper>
                <EcosystemCard>
                    <EcosystemH2>MAX SUPPLY</EcosystemH2>
                    <EcosystemP>100 QUADRILLION</EcosystemP>
                </EcosystemCard>
                <EcosystemCard>
                    <EcosystemH2>TOKEN SYMBOL</EcosystemH2>
                    <EcosystemP>$ SHIBAKEN</EcosystemP>
                </EcosystemCard>
                <EcosystemCard>
                    <EcosystemH2>NETWORK</EcosystemH2>
                    <EcosystemP>ETHEREUM ERC-20</EcosystemP>
                </EcosystemCard>
            </EcosystemWrapper>
        </EcosystemContainer>
    )
}

export default Ecosystem
