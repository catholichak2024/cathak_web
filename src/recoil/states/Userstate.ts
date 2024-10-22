import { atom } from 'recoil';
import { userInfoType } from '../types/userdetail';

export const userInfoState = atom<userInfoType>({
    key: 'userInfoState',
    default: {
        name: '홍길동',
        major: '컴퓨터공학',
        doubleMajor: '전자공학', // 복수전공
        attendedClasses: [1, 3,5,6,7,8], // 수강한 과목의 classId
    },
});