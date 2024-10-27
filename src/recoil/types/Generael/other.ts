export interface Subject {
    credit: number;
    name: string;
    bookmark: number;
}

// 전공별 필수 과목 내용 인터페이스
export interface MajorContent {
    major: string;
    content: string;
}

// 전체 데이터 구조 인터페이스
export interface CourseData {
    minimum: string;
    received: string;
    content: MajorContent[];  // MajorContent 배열
    subject: Subject[];       // Subject 배열
}