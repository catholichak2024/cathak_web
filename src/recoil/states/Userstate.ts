import { atom } from 'recoil';
import { userInfoType } from '../types/userdetail';

export const userInfoState = atom<userInfoType>({
    key: 'userInfoState',
    default: {
        name: '홍길동',
        majorArea: '공학영역',
        major: '컴퓨터정보공학부', 
        doubleMajorArea: '자연과학영역',    
        doubleMajor: '화학과', // 복수전공
        attendedClasses: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], // 수강한 과목의 classId
    },
});