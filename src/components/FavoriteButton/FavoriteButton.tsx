import { palette } from '@/styles/palette';
import { findFavoriteById } from '@/utils/findFavoriteById';
import { toggleFavorite } from '@/utils/toggleFavorite';
import { FC, useState } from 'react';
import styled from 'styled-components'

interface IFavoriteButtonProps {
    id: string;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({id}) => {

    const [isFavorite, setFavorite] = useState(!!findFavoriteById(id));

    const onClicked = () => {
        setFavorite(pv => !pv);
        toggleFavorite(id);
    }

    return (
        <Favorite 
            $isFavorite={isFavorite}
            onClick={() => onClicked()}>
            {palette.favoriteSymbol}
        </Favorite>
    );
}

interface IFavoriteProps {
    $isFavorite: boolean;
}

export const Favorite = styled.div<IFavoriteProps>`
    position: absolute;
    top: 0;
    right: ${p => p.$isFavorite ? '0%' : '-20%'};
    margin: 10px;
    font-size: 1.5rem;
    line-height: 0.9;
    color: ${p => p.$isFavorite ? palette.accentColor : palette.textColor};
    text-shadow: 0 0 3px black;
    cursor: pointer;
    transition: color 0.2s;
    transition: right 0.3s;

    background: none;
    border: none;

    &:hover{
        color: ${p => p.$isFavorite ? palette.textColor : palette.accentColor};
    }
`

export default FavoriteButton;