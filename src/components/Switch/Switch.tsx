import { palette } from '@/styles/palette';
import { FC, useState } from 'react';
import styled from 'styled-components'

interface ISwitchProps {
    onChange: Function;
}

const Switch: FC<ISwitchProps> = ({onChange}) => {

    const [selectedOption, setSelectedOption] = useState(0);

    const onChangeOption = (option: number) => {
        setSelectedOption(option);
        onChange(
            option === 0 
            ? 'small' 
            : option === 1
                ? 'medium'
                : 'large'
        );
    }

    return (  
        <Block
            selectedNumber={selectedOption}>
            <Option
                onClick={() => onChangeOption(0)}
                isSelected={selectedOption === 0}>
                S
            </Option>
            <Option
                onClick={() => onChangeOption(1)}
                isSelected={selectedOption === 1}>
                M
            </Option>
            {/* <Option
                onClick={() => onChangeOption(2)}
                isSelected={selectedOption === 2}>
                L
            </Option> */}
        </Block>
    );
}

interface IOptionProps {
    isSelected: boolean;
}

const Option = styled.button<IOptionProps>`
    z-index: 2;
    width: 2rem;
    height: 100%;
    font-size: 1.5rem;
    color: ${palette.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    transition: 0.2s;
    border: none;
    background: none;

    &:hover{
        color: ${p => p.isSelected ? 'inherit' :palette.accentColor}
    }
`

interface IBlockProps {
    selectedNumber: number;
}

const Block = styled.div<IBlockProps>`
    /* padding: 0.5rem; */
    position: relative;
    background-color: ${palette.innerColor};
    border-radius: 15px;
    border: 1px solid ${palette.borderColor};
    color: ${palette.textColor};
    overflow: hidden;

    display: flex;

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: ${p => p.selectedNumber * 50}%;
        width: 50%;
        height: 100%;
        z-index: 1;
        background-color: ${palette.accentColor};
        transition: 0.2s;
    }
`

export default Switch;