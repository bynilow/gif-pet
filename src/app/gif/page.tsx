'use client'

import Container from '@/components/Container/Container';
import GifCard from '@/components/Gif/Cards/GifCardMedium';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchBar from './Search/SearchBar';
import TTT from '@/components/ttt/TTT';

interface IGifPageProps {

}

const GifPage: FC<IGifPageProps> = ({ }) => {

    return (
        <Gif>
            <Container>
                <GifInner>
                    <SearchBar />
                    <GifList>
                        <GifCard />
                        <GifCard />
                        <GifCard />
                        <GifCard />
                        <GifCard />
                        <GifCard />
                        <GifCard />
                    </GifList>
                </GifInner>
            </Container>
        </Gif>
    );
}

const GifList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GifInner = styled.div`
    display: flex;
    flex-direction: column;
`

const Gif = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export default GifPage;