//api연결 - 전공, 전공기초
export interface Subject {
    credit: number;
    name: string;
    bookmark: number;
}

export interface MajorContent {
    content: string;
}

export interface MajorCourseData {
    minimum: number;
    received: string;
    content: MajorContent[];  // 전공 content는 배열
    subject: Subject[];
}