import React, { useState } from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassType from '../ClassTypeList/ClassType/ClassType';
import { userInfoState } from '../../../recoil/states/Userstate';
import { MajorAreaListState } from '../../../recoil/states/majorstate';


const ClassListMajor12: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const majorAreas = useRecoilValue(MajorAreaListState);
    
    const classTypes = ['제 1전공','제 2전공','타전공'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    
    // 사용자전공을 기반으로 해당 전공의 정보를 찾기
    const majorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.major);
    const doubleMajorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.doubleMajor);


    const filteredClasses = attendedClasses.filter((classItem) => {
        if (classItem.category !== '전공') return false; // 전공 수업이 아닌 경우 제외

        if (selectedCategory === '제 1전공') {
            return classItem.major === user.major;  // 사용자의 1전공과 같은 경우
        } else if (selectedCategory === '제 2전공') {
            return classItem.major === user.doubleMajor;  // 사용자의 2전공과 같은 경우
        } else if (selectedCategory === '타전공') {
            return classItem.major !== user.major && classItem.major !== user.doubleMajor;  // 1전공과 2전공이 모두 아닌 경우
        }
    });
    
    let description = '';   
    let major1MinCredit = 0; 
    let major2MinCredit = 0;                        
     // 선택된 카테고리에 따라 description 설정
     switch (selectedCategory) {
        case '제 1전공':
            if (majorInfo) {
                description = majorInfo.major1 || '';
                major1MinCredit = majorInfo.MajorCredit ? majorInfo.MajorCredit[1] : 0; // 최소 이수 학점 체크
            }
            break;
        case '제 2전공':
            if (doubleMajorInfo) {
                description = doubleMajorInfo.major2 || '';
                major2MinCredit = doubleMajorInfo.MajorCredit ? doubleMajorInfo.MajorCredit[1] : 0; // 최소 이수 학점 체크
            }
            break;
        case '타전공':
            description = majorInfo?.othermajor || '';
            break;
        default:
            break;
    }

    //최소이수학점/ 취득학점계산
    const TotalminCredit = major1MinCredit + major2MinCredit;
    const getTotalCredit = filteredClasses.reduce((acc, classItem) => acc + classItem.credit, 0);
    
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return(
        <S.Layout>
            <S.ClassContainer>
                <ClassType 
                    types={classTypes} 
                    selectedType={selectedCategory}
                    onTypeClick={handleCategoryClick} 
                />
                <Credit 
                    minimumCredit={TotalminCredit}
                    getCredit={getTotalCredit}
                />
                <EssentailBox 
                    description={description} // 선택된 카테고리에 맞는 description
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={filteredClasses} user={user} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassListMajor12;