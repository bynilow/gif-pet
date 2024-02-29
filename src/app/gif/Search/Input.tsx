import { palette } from '@/styles/palette';
import { FC, useState } from 'react';
import styled from 'styled-components'

interface IInputProps {

}

const Input: FC<IInputProps> = ({}) => {

    const [value, setValue] = useState('');

    return (  
        <Block>
            <InputText 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                maxLength={30} />
        </Block>
    );
}

const InputText = styled.input`
    border: none;
    background-color: none;
    background: none;
    outline: none;
    color: ${palette.textColor};
    font-size: 1rem;

    
`

const Block = styled.div`
    padding: 0.5rem;
    background-color: ${palette.innerColor};
    border-radius: 15px;
    border: 1px solid ${palette.borderColor};
    color: ${palette.textColor};
    transition: 0.2s;

    &:hover{
        border: 1px solid ${palette.accentColor};
    }

    &:has(${InputText}:focus){
        box-shadow: 0 0 10px ${palette.accentColor};
        border: 1px solid ${palette.accentColor};
    }
    
`

export default Input;