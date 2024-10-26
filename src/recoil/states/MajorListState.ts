import { atom } from 'recoil';
import { majorType } from '../types/major';

//모든 학과 목록
export const majorListState = atom<majorType[]>({
    key: 'majorListState',
    default: [
        {
            majorName: '컴퓨터정보공학부',
           
        },
        {
            majorName: '정보통신전자공학과',
           
            
        },
        {
            majorName: '미디어기술콘텐츠학과',
        
            
        },
        {
            majorName: '공간디자인소비자학과',
          
            
        },
        {
            majorName: '의생명과학과',
      
            
        },
        {
            majorName: '의류학과',
          
            
        },
        {
            majorName: '경제학과',
           
            
        },
        {
            majorName: '국제법정계열',
           
            
        },
        {
            majorName: '아동학과',
         
            
        },
        {
            majorName: '바이오메디컬화학공학과',
          
            
        },
        
    ],
});