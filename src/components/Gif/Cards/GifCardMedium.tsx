import FavoriteButton, { Favorite } from '@/components/FavoriteButton/FavoriteButton';
import { IGif } from '@/models/IGif';
import { palette } from '@/styles/palette';
import { FC } from 'react';
import styled from 'styled-components'

interface IGifCardMediumProps {
    gif: IGif;
}

const GifCardMedium: FC<IGifCardMediumProps> = ({gif}) => {

    return (  
        <Card>
            <UserName>
                {gif.user ? gif.user.display_name : ''} 
                {gif.user 
                    ? gif.user.is_verified && <Verified>{palette.checkSymbol}</Verified>
                    : null }
            </UserName>
            <Gif src={`https://i.giphy.com/${gif.id}.webp`} alt='' />
            <FavoriteButton id={gif.id} />
            <Title>
                {gif.title}
            </Title>
        </Card>
    );
}

const Verified = styled.span`
    background-color: ${palette.accentColor};
    color: ${palette.textColor};
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserName = styled.div`
    color: ${palette.textColor};
    display: flex;
    gap: 10px;
`

const Title = styled.p`
    font-size: 1rem;
    color: ${palette.grayTextColor};
`

const Gif = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: ${palette.innerColor};
`

const Card = styled.div`
    position: relative;
    background-color: ${palette.cardColor};
    border-radius: 15px;
    border: 1px solid ${palette.borderColor};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        z-index: 2;
        box-shadow: 0 0 35px 10px black;
        transform: perspective(900px) translateY(-5px) rotateX(2deg) scale(1.05);
    }

    &:hover ${Favorite}{
        right: 0;
    }

    
`

export default GifCardMedium;