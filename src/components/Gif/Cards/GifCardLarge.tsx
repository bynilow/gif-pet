import { IGif } from '@/models/IGif';
import { palette } from '@/styles/palette';
import { FC } from 'react';
import styled from 'styled-components'

interface IGifCardLargeProps {
    gif: IGif;
}

const GifCardLarge: FC<IGifCardLargeProps> = ({gif}) => {

    return (  
        <Card>
            <User>
                {
                    gif.user &&
                    <Avatar src={gif.user.avatar_url} alt='' />
                }
                <UserName>
                    {gif.user ? gif.user.display_name : ''} 
                    {gif.user 
                        ? gif.user.is_verified && <Verified>{palette.checkSymbol}</Verified>
                        : null }
                </UserName>
            </User>
            <Gif src={`https://i.giphy.com/${gif.id}.webp`} alt='' />
            <Favorite>
                {palette.favoriteSymbol}
            </Favorite>
            <Title>
                {gif.title}
            </Title>
        </Card>
    );
}

const Avatar = styled.img`
    width: 3rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
`

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`

const Verified = styled.span`
    background-color: ${palette.accentColor};
    color: ${palette.textColor};
    height: 1.5rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserName = styled.div`
    color: ${palette.textColor};
    display: flex;
    align-items: center;
    gap: 10px;
`

const Favorite = styled.div`
    position: absolute;
    top: 0;
    right: -20%;
    margin: 10px;
    height: fit-content;
    font-size: 1.5rem;
    line-height: 0.9;
    cursor: pointer;
    transition: color 0.2s;
    transition: right 0.3s;

    &:hover{
        color: ${palette.accentColor};
    }
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
        transform: perspective(900px) translateY(-5px) rotateX(1deg) scale(1.05);
    }

    &:hover ${Favorite}{
        right: 0;
    }

    
`

export default GifCardLarge;