import FavoriteButton, { Favorite } from '@/components/FavoriteButton/FavoriteButton';
import { IGif } from '@/models/IGif';
import { palette } from '@/styles/palette';
import { FC, useRef, useState } from 'react';
import styled from 'styled-components'

interface IGIfCardSmallProps {
    gif: IGif
}

const GIfCardSmall: FC<IGIfCardSmallProps> = ({gif}) => {

    return (  
        <Card>
            <FavoriteButton id={gif.id} />
            <Title>
                {gif.title}
            </Title>
            <Gif src={`https://i.giphy.com/${gif.id}.webp`} alt='' />
        </Card>
    );
}

const Title = styled.div`
    position: absolute;
    z-index: 2;
    bottom: -10rem;
    left: 0;
    margin: 10px;
    font-size: 1rem;
    transition: bottom 0.2s;
`

const Gif = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    /* background-color: ${palette.innerColor}; */
`

const Card = styled.div`
    padding: 0;
    position: relative;
    /* background-color: ${palette.cardColor}; */
    border-radius: 10px;
    border: 1px solid ${palette.borderColor};
    display: flex;
    cursor: pointer;
    transition: 0.2s;
    overflow: hidden;

    &:hover{
        z-index: 2;
        box-shadow: 0 0 35px 10px black;
        transform: perspective(900px) translateY(-5px) rotateX(10deg) scale(1.05);

        &:after{
            opacity: 0.8;
        }
    }

    &:after{
        content: '';
        position: absolute;
        left: -20%;
        bottom: -20%;
        width: 150%;
        height: 40%;
        filter: blur(25px);
        opacity: 0;
        background-color: black;
        transition: 0.3s;

    }

    &:hover ${Favorite}{
        right: 0;
    }
    &:hover ${Title}{
        bottom: 0;
    }

    
`

export default GIfCardSmall;