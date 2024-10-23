
import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import ClassType from './ClassType/ClassType';
import ClassContainer from '../../components/DetailClass/ClassContainer/ClassContainer';
import Header from '../../components/Header/Header';
import { classListState } from '../../recoil/states/Classstates';
import SearchBar from './SearchBar/SearchBar';
import { classInfoType } from '../../recoil/types/classdetail'; // 클래스 타입 가져오기
import { userInfoState } from '../../recoil/states/Userstate';

const SearchClass: React.FC = () => {
    const classList = useRecoilValue(classListState);
    const [selectedCategory, setSelectedCategory] = useState<string>('교양');
    const [searchResult, setSearchResult] = useState<classInfoType[]>(classList);
    const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const user = useRecoilValue(userInfoState);
    const classTypes = ['교양', '전공기초', '전공', '교양추천'];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setIsSearching(false); // 카테고리를 클릭하면 검색 모드를 해제
    };

    const filteredClasses = selectedCategory
        ? classList.filter(classItem => classItem.category === selectedCategory)
        : classList; 

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setIsSearching(true); 
        if (term) {
            const results = classList.filter(classItem => 
                classItem.className.includes(term)
            );
            setSearchResult(results);
        } else {
            setSearchResult([]);
            // setFilteredClasses(classList); // 검색어가 없으면 기본 목록으로 되돌림
        }
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
                <SearchBar onSearch={handleSearch} />
                {isSearching ? (
                    searchResult.length > 0 ? (
                        <ClassContainer data={searchResult} user={user} />
                    ) : (
                        <S.ErrorText>검색 결과가 없습니다.</S.ErrorText>
                    )
                ) : (
                    <ClassContainer data={filteredClasses} user={user}/>
                )}
            </S.Content>
        </S.Layout>
    );
};

export default SearchClass;
// import React, { useState } from 'react';
// import * as S from './Styles';
// import { useRecoilValue } from 'recoil';
// import { attendedClassListState } from '../../recoil/selectors/attendedClass';
// import ClassType from './ClassType/ClassType';
// import ClassContainer from '../../components/DetailClass/ClassContainer/ClassContainer';
// import Header from '../../components/Header/Header';
// import { classListState } from '../../recoil/states/Classstates';
// import SearchBar from './SearchBar/SearchBar';

// const SearchClass: React.FC = () => {
//     const classList = useRecoilValue(classListState);
//     const [selectedCategory, setSelectedCategory] = useState<string>('교양');
    
//     const classTypes = ['교양', '전공기초', '전공', '교양추천'];

//     const filteredClasses = selectedCategory
//         ? classList.filter(classItem => classItem.category === selectedCategory)
//         : classList; // 모든 수업 목록을 기본으로 보여줌

//     const handleCategoryClick = (category: string) => {
//         // if (category === '교양추천') {
//         //     setSelectedCategory(null); 
//         // } else {
//         //     setSelectedCategory(category);
//         // }
//         setSelectedCategory(category);
//     };

//     return (
//         <S.Layout>
//             <Header backarrow catholiclogo2 />
//             <S.Content>
                
//                 <ClassType 
//                     types={classTypes} 
//                     selectedType={selectedCategory}
//                     onTypeClick={handleCategoryClick} // 클릭 핸들러 전달
//                 />
//                 <SearchBar setFilteredClasses={setFilteredClasses}/>
//                 <ClassContainer data={filteredClasses} />
//             </S.Content>
//         </S.Layout>
//     );
// };

// export default SearchClass;


