import { atom } from 'recoil';
import { userInfoType } from '../types/userdetail';

//사용자정보 
export const userInfoState = atom<userInfoType>({
    key: 'userInfoState',
    default: {
        name: '홍길동',
        studentid: 231234567,  //학번
        majorArea: '공학영역',
        major: '컴퓨터정보공학부', 
        doubleMajorArea: '자연과학영역',    
        doubleMajor: '화학과', // 복수전공
        attendedClasses: [1,2,3,4,5,6,7,8,9,10,], // 수강한 과목의 classId
    },
});



//