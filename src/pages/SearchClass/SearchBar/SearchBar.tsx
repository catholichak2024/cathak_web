import React, { useState } from 'react';
import * as S from './Styles';
import { Search } from '../../../assets/icon';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void; 
}

const SearchBar:React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        onSearch(inputValue);
    };

    return (
        <S.Layout>
            <S.Container>
                <input 
                    type="text" 
                    placeholder="수업명 검색" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Update input value
                />
                <div style={{ cursor: 'pointer' }} onClick={handleSearch}>
                    <Search />
                </div>
            </S.Container>
        </S.Layout>
    );
};

export default SearchBar;