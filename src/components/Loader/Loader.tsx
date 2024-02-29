import { palette } from '@/styles/palette';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components'

interface ILoaderProps {

}

const Loader: FC<ILoaderProps> = ({}) => {

    return (  
        <Block>
            <Circle />
            
        </Block>
    );
}

const CircleAnim = keyframes`
    0%{
        border-radius: 0%;
        transform: scale(1) rotate(0deg);
    }
    50%{
        border-radius: 50%;
        transform: scale(1.5) rotate(360deg);
    }
    0%{
        border-radius: 0%;
        transform: scale(1) rotate(0deg);
    }
`

const Circle = styled.div`
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 0%;
    background-color: ${palette.accentColor};
    animation: ${CircleAnim} 5s ease infinite; 
    animation-delay: 1s;
`

const Block = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    
`

export default Loader;