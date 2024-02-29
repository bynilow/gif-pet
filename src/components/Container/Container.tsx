import React, { FC } from 'react';
import styled from 'styled-components'

interface IContainerProps {
    children: React.ReactNode;
}

const Container: FC<IContainerProps> = ({children}) => {

    return (  
        <Block>
            {children}
        </Block>
    );
}

const Block = styled.div`
    width: 90%;
`

export default Container;