'use client'

import { FC } from 'react';
import styled from 'styled-components'
import Container from '../Container/Container';
import { palette } from '@/styles/palette';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = ({}) => {

    return (  
        <Block>
            <Container>
                <HeaderInner>
                    header
                </HeaderInner>
            </Container>
        </Block>
    );
}

const HeaderInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    font-size: 2rem;
`

const Block = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    color: ${palette.textColor};
    backdrop-filter: blur(5px);
    border-bottom: 1px solid ${palette.borderColor};
    background-color: #00000075;
    display: flex;
    justify-content: center;
`

export default Header;