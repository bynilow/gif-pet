import { palette } from '@/styles/palette';
import { FC } from 'react';
import styled from 'styled-components'

interface IGifCardMediumProps {

}

const GifCardMedium: FC<IGifCardMediumProps> = ({}) => {

    return (  
        <Card>
            <UserName>
                just User
            </UserName>
            <Gif />
            <Favorite>
                {palette.favoriteSymbol}
            </Favorite>
            <Title>
                I dont have title!
            </Title>
        </Card>
    );
}

const UserName = styled.div`
    color: ${palette.textColor};
`

const Favorite = styled.div`
    position: absolute;
    top: 0;
    right: -20%;
    margin: 10px;
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

const Gif = styled.div`
    width: 100%;
    height: 70%;
    background-color: ${palette.innerColor};
`

const Card = styled.div`
    position: relative;
    height: 15rem;
    background-color: ${palette.cardColor};
    border-radius: 15px;
    border: 1px solid ${palette.borderColor};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:hover ${Favorite}{
        right: 0;
    }

    overflow: hidden;
`

export default GifCardMedium;