import React, { useState, useEffect } from 'react';
import * as S from './Styles';
// import { useRecoilValue } from 'recoil';
import ClassType from './ClassType/ClassType';
import Header from '../../components/Header/Header';
import SearchBar from './SearchBar/SearchBar';
import CulturalContainer from './ClassContainer/CulturalContainer';
// import MajorFoundationContainer from './ClassContainer/MajorFoundationContainer';
// import MajorContainer from './ClassContainer/MajorContainer';
import { useNavigate } from 'react-router';

const SearchClass: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('교양');
    const [classData, setClassData] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const classTypes = ['교양', '전공기초', '전공', '챗봇'];
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch classes on mount or when category/searchTerm changes
        fetchClasses(selectedCategory, searchTerm);
    }, [selectedCategory, searchTerm]);

    const handleCategoryClick = (category: string) => {
        if (category === '챗봇') {
            navigate('/searchclass/chatbot');
        } else {
            setSelectedCategory(category);
            setIsSearching(false);
        }
    };

    const fetchClasses = async (type: string, term: string) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://13.125.38.246:3000/EveryGrade/search?type=${type}&name=${term}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('데이터 요청에 실패했습니다.');
            
            const result = await response.json();
            setClassData(result.majorData || []); // Assigning 'majorData' to classData
            setIsSearching(true);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error);
        }
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const renderContainer = () => {
        if (selectedCategory === '교양') return <CulturalContainer data={classData} />;
        // if (selectedCategory === '전공기초') return <MajorFoundationContainer data={classData} />;
        // return <MajorContainer data={classData} />;
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
                    isSearching && classData.length > 0 ? (
                        renderContainer()
                    ) : (
                        <S.ErrorText>검색 결과가 없습니다.</S.ErrorText>
                    )
                )}
            </S.Content>
        </S.Layout>
    );
};

export default SearchClass;


// import React, { useState } from 'react';
// import * as S from './Styles';
// import { useRecoilValue } from 'recoil';
// import ClassType from './ClassType/ClassType';
// import Header from '../../components/Header/Header';
// import { classListState } from '../../recoil/states/Classstates';
// import SearchBar from './SearchBar/SearchBar';
// import { classInfoType } from '../../recoil/types/classdetail';
// import { userInfoState } from '../../recoil/states/Userstate';

// import Chatbot from '../chatbot/Chatbot';


// import CulturalContainer from './ClassContainer/CulturalContainer';
// import MajorFoundationContainer from './ClassContainer/MajorFoundationContainer';
// import MajorContainer from './ClassContainer/MajorContainer';

// const SearchClass: React.FC = () => {
//     const classList = useRecoilValue(classListState);
//     const [selectedCategory, setSelectedCategory] = useState<string>('교양');
//     const [searchResult, setSearchResult] = useState<classInfoType[]>(classList);
//     const [searchTerm, setSearchTerm] = useState<string>('');
//     const [isSearching, setIsSearching] = useState<boolean>(false);
//     const user = useRecoilValue(userInfoState);
//     const classTypes = ['교양', '전공기초', '전공', '챗봇'];

//     const handleCategoryClick = (category: string) => {
//         setSelectedCategory(category);
//         setIsSearching(false);
//     };

//     const filteredClasses = selectedCategory
//         ? classList.filter(classItem => classItem.category === selectedCategory)
//         : classList; 

//     const handleSearch = (term: string) => {
//         setSearchTerm(term);
//         setIsSearching(true); 
//         if (term) {
//             const results = classList.filter(classItem => 
//                 classItem.className.includes(term)
//             );
//             setSearchResult(results);
//         } else {
//             setSearchResult([]);
//         }
//     };

//     return (
//         <>
//             <S.Layout>
//                 <Header backarrow catholiclogo2 />
               
//                 <S.Content>
//                     <ClassType 
//                         types={classTypes} 
//                         selectedType={selectedCategory}
//                         onTypeClick={handleCategoryClick} 
//                     />
//                     {selectedCategory !== '챗봇' && <SearchBar onSearch={handleSearch} />}
//                     {selectedCategory !== '챗봇' && (
//                         isSearching ? (
//                             searchResult.length > 0 ? (
//                                 selectedCategory === '교양' ? (
//                                     <CulturalContainer />
//                                 ) : selectedCategory === '전공기초' ? (
//                                     <MajorFoundationContainer />
//                                 ) : (
//                                     <MajorContainer />
//                                 )
//                             ) : (
//                                 <S.ErrorText>검색 결과가 없습니다.</S.ErrorText>
//                             )
//                         ) : (
//                             selectedCategory === '교양' ? (
//                                 <CulturalContainer />
//                             ) : selectedCategory === '전공기초' ? (
//                                 <MajorFoundationContainer />
//                             ) : (
//                                 <MajorContainer />
//                             )
//                         )
//                     )}
                    
//                 </S.Content>
               
//                     {selectedCategory === '챗봇' && <Chatbot />}
                
                
//             </S.Layout>
//         </>
//     );
// };

// export default SearchClass;

