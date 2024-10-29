import React, { useState } from 'react';
import * as S from './Styles';
import { Search } from '../../../assets/icon';

interface SearchBarProps {
    searchTerm: string;
    onSearch: (searchTerm: string) => void; 
}

const SearchBar:React.FC<SearchBarProps> = ({searchTerm, onSearch }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value); 
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);  
    };

    return (
        <S.Layout>
            <S.Container>
                <input 
                    type="text" 
                    placeholder="수업명 검색" 
                    value={searchTerm}
                    onChange={handleInputChange} 
                />
                <div style={{ cursor: 'pointer' }} onClick={handleSearchClick}>
                    <Search />
                </div>
            </S.Container>
        </S.Layout>
    );
};

export default SearchBar;