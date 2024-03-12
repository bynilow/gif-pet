import { FC } from 'react';
import styled from 'styled-components'
import GIfCardSmall from './GifCardSmall';
import GifCardMedium from './GifCardMedium';
import { IGif } from '@/models/IGif';
import GifCardLarge from './GifCardLarge';

interface IGifCardHOCProps {
    size: 'small' | 'medium' | 'large';
    gif: IGif;
}

const GifCardHOC: FC<IGifCardHOCProps> = ({size, gif}) => {

    switch(size){
        case 'small':
            return <GIfCardSmall gif={gif} />
        case 'medium':
            return <GifCardMedium gif={gif} />
        case 'large':
            return <GifCardLarge gif={gif} />
    }
}


export default GifCardHOC;