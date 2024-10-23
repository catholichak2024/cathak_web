import { atom } from 'recoil';
import { MajorAreaInfoType, MajorInfoType } from '../types/majordetail';

export const MajorAreaListState = atom<MajorAreaInfoType[]>({
    key: 'MajorAreaListState',
    default: [
        {
            areaname: '자연과학영역',
            relatedMajors: [
                {
                    name: '화학과',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '일반화학및실험1, 일반화학및실험2 및 자연과학영역 중 12학점',
                    otherAreaMajorBasicsText: '자연과학계열 외 3학점',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 9학점, (전공심화일 때)전공필수 15학점',
                    major2: '(복수전공일 때)전공필수 12학점',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
                {
                    name: '수학과',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '일반수학1및연습, 일반수학2및연습 및 자연과학영역 중 12학점',
                    otherAreaMajorBasicsText: '자연과학계열 외 3학점',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 6학점, (전공심화일 때)전공필수 12학점',
                    major2: '(복수전공일 때)전공필수 12학점',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
                {
                    name: '물리학과',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '일반물리학및실험1, 일반물리학및실험2 및 자연과학영역 중 12학점',
                    otherAreaMajorBasicsText: '자연과학계열 외 3학점',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 9학점, (전공심화일 때)전공필수 13학점',
                    major2: '(복수전공일 때)전공필수 13학점',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
            ]
        },
        {
            areaname: '공학영역',
            relatedMajors: [
                
                {
                    name: '컴퓨터정보공학부',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '컴퓨터와프로그래밍1, 컴퓨터와프로그래밍2',
                    otherAreaMajorBasicsText: '일반수학1,2 및 연습 교과목 6학점/ 일반화학 및 실험1,2, 일반물리학 및 실험1,2, 일반생물학1,2 중 3학점 ',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 18학점',
                    major2: '-',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
                {
                    name: '정보통신전자공학부',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '프로그래밍및실습1,프로그래밍및실습2',
                    otherAreaMajorBasicsText: '일반수학1,2 및 연습 교과목 6학점/ 일반화학 및 실험1,2, 일반물리학 및 실험1,2, 일반생물학1,2 중 3학점 ',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 12학점',
                    major2: '-',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
                {
                    name: '미디어기술콘텐츠학과',
                    relatedbasicgeneral: '인간학1, 인간학2, 키스톤디자인·인문창의, 키스톤디자인·창의설계, 그리스도교사상과문화, 사랑나누기, 생애진로와커리어디자인',
                    coregeneralText: '인문·사회, 자연·과학,문화·예술, 휴먼·테크,글로벌·영어 총 5개 각 영역에서 3학점',
                    freegeneralText: '-',
                    mainAreaMajorBasicsText: '디지털콘텐츠창작입문, 미디어정보처리프로그래밍',
                    otherAreaMajorBasicsText: '문화콘텐츠트랙: 공학영역 제외  6학점 이상/미디어공학트랙: 일반화학 및 실험 1,2, 일반수학1,2 및 연습, 일반물리학 및 실험1,2, 일반생물학1,2, 공학영역 통합하여 6학점 이상 이수하여야 함. 미디어공학트랙 : 일반화학 및 실험1,2, 일반수학1,2및연습, 일반물리학 및 실험1,2, 일반생물학1,2, 공항영역 과목 중 6학점',
                    major1: '외국어 강의 교과목을 중핵교양 필수 글로벌·영어 영역 교과목 및 전공 교과목 9학점',
                    major2: '-',
                    minor: '(졸업 할 때까지 부전공 이수 요건을 갖추지 못하더라도 다른 졸업요건이 완료된 경우에는 졸업으로 처리되며 이수구분은 \'부전\'으로 유지됨)',
                    othermajor: '-',
                },
            ]
        },
    ]
});
