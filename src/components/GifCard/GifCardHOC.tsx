import { FC } from 'react';
import styled from 'styled-components'
import GIfCardSmall from './GifCardSmall';
import GifCardMedium from './GifCardMedium';

interface IGifCardHOCProps {
    size: 'small' | 'medium' | 'large';
    id: string;
    title: string;
}

const GifCardHOC: FC<IGifCardHOCProps> = ({size, id, title}) => {

    switch(size){
        case 'small':
            return <GIfCardSmall
                id={id}
                title={title} />
        case 'medium':
            return <GifCardMedium />
        case 'large':
            <></>
    }
}


export default GifCardHOC;