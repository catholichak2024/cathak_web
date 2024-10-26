import { atom } from 'recoil';
import { majorType } from '../types/major';

//모든 학과 목록
export const majorListState = atom<majorType[]>({
    key: 'majorListState',
    default: [
        {
            majorName: '컴퓨터정보공학부',
            majorId: '1abc'
        },
        {
            majorName: '정보통신전자공학과',
            majorId: '2abc',
            
        },
        {
            majorName: '미디어기술콘텐츠학과',
            majorId: '3abc',
            
        },
        {
            majorName: '공간디자인소비자학과',
            majorId: '4abc',
            
        },
        {
            majorName: '의생명과학과',
            majorId: '5abc',
            
        },
        {
            majorName: '의류학과',
            majorId: '6abc',
            
        },
        {
            majorName: '경제학과',
            majorId: '7abc',
            
        },
        {
            majorName: '국제법정계열',
            majorId: '8abc',
            
        },
        {
            majorName: '아동학과',
            majorId: '9abc',
            
        },
        {
            majorName: '바이오메디컬화학공학과',
            majorId: '10abc',
            
        },
        
    ],
});