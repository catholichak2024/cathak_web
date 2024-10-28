// SearchClass.tsx
import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import ClassType from './ClassType/ClassType';
import Header from '../../components/Header/Header';
import SearchBar from './SearchBar/SearchBar';
import ClassComponent from './ClassContainer/ClassComponent'; // ClassComponent import
import { useNavigate } from 'react-router';

interface ClassData {
  name: string;
  credit: number;
  bookmark: boolean;
}

const SearchClass: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('교양');
  const [classData, setClassData] = useState<ClassData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const classTypes = ['교양', '전공기초', '전공', '챗봇'];
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
    if (selectedCategory !== '챗봇') {
      fetchClasses(selectedCategory, searchTerm);
    }
  }, [selectedCategory, searchTerm]);

  const handleCategoryClick = (category: string) => {
    if (category === '챗봇') {
      navigate('/searchclass/chatbot');
    } else {
      setSelectedCategory(category);
      setSearchTerm('');
    }
  };

  const fetchClasses = async (type: string, term: string) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      const url = new URL('http://13.125.38.246:3000/EveryGrade/search');
      url.searchParams.append('type', type);
      if (term) url.searchParams.append('name', term);
      console.log("Fetching classes data...");
      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(token);
      console.log("이거왜안돼");
      if (!response.ok) throw new Error('데이터 요청에 실패했습니다.');

      const result = await response.json();
      setClassData(result.majorData || []);
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <S.Layout>
      <Header backarrow catholiclogo2 />
      <S.Content>
        <ClassType 
          types={classTypes} 
          selectedType={selectedCategory}
          onTypeClick={handleCategoryClick} 
        />
        {selectedCategory !== '챗봇' && <SearchBar onSearch={handleSearch} />}
        {selectedCategory !== '챗봇' && (
          classData.length > 0 ? (
            <ClassComponent data={classData} /> // ClassComponent에 데이터 전달
          ) : (
            <S.ErrorText>검색 결과가 없습니다.</S.ErrorText>
          )
        )}
      </S.Content>
    </S.Layout>
  );
};

export default SearchClass;
