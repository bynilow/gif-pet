'use client'

import { FC } from 'react';
import styled from 'styled-components'
import Container from '../Container/Container';
import { palette } from '@/styles/palette';
import Link from 'next/link';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = ({}) => {

    return (  
        <Block>
            <Container>
                <HeaderInner>
                    <Logo>
                        GIF
                    </Logo>
                    <Nav>
                        <HeaderLink href='/favorite'>
                            Favorites
                        </HeaderLink>
                        <HeaderLink href='/'>
                            Main
                        </HeaderLink>
                    </Nav>
                </HeaderInner>
            </Container>
        </Block>
    );
}

const HeaderLink = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    color: ${palette.textColor};
    transition: 0.1s;

    &:hover{
        color: ${palette.accentColor};
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Logo = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: ${palette.textColor};
`

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
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