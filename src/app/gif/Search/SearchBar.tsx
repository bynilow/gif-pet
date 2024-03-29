import { FC } from 'react';
import styled from 'styled-components'
import Input from './Input';
import Button from './Button';
import Switch from '@/components/Switch/Switch';

interface ISearchBarProps {
    onChangeSize: Function;
}

const SearchBar: FC<ISearchBarProps> = ({onChangeSize}) => {

    return (  
        <Search>
            <Input />
            <Button>
                Search
            </Button>
            <Switch onChange={(size: string) => onChangeSize(size)} />
        </Search>
    );
}

const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 15px;

`

export default SearchBar;