//api연결 - 전공, 전공기초
export interface Subject {
    credit: number;
    name: string;
    bookmark: number;
}

export interface MajorBasicContent {
    major: string;
    content: string;
}

export interface MajorBasicCourseData {
    minimum: number;
    received: string;
    content: MajorBasicContent[];  // 전공 content는 배열
    subject: Subject[];
}