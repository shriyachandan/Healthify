import React from 'react'
import styled from 'styled-components'

import healthcare from 'assets/images/healthcare.png'

const Wrapper = styled.div`
    padding: 30px;
    width: 100%;

    @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Paragraph = styled.p`
    text-align: center;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-size: 14px;
    z-index: 0;
`;

const Logo = styled.img`
    margin-left: 10px;
    transform: translateY(5px);
    height: 21px;
    z-index: 0;
`;

const Footer = () => {
  return (
    <Wrapper>
        <Paragraph>Copyright 2022 ©️ Shriya</Paragraph>
        <Paragraph>
            Powered by <Logo src={healthcare} />
        </Paragraph>
    </Wrapper>
  )
}

export default Footer