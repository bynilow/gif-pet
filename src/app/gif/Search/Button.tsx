import { palette } from '@/styles/palette';
import { FC } from 'react';
import styled from 'styled-components'

interface IButtonProps {
    children: React.ReactNode;
}

const Button: FC<IButtonProps> = ({children}) => {

    return (  
        <ButtonBlock>
            {children}
        </ButtonBlock>
    );
}

const ButtonBlock = styled.button`
    background-color: ${palette.accentColor};
    color: ${palette.textColor};
    font-size: 1rem;
    border: none;
    border-radius: 15px;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        box-shadow: 0 0 10px ${palette.accentColor};
        transform: scale(1.1);
    }

`

export default Button;