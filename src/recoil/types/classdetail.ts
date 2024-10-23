export interface classInfoType {
    className: string;
    classId: number; // 수업아이디(사용자id아님)
    credit: number;  //학점수
    category: string; // 수업 (교양/전공기초/전공)
    subCategory?: string; // 교양 세부 카테고리기(기초/중핵/기본)
    majorArea?: string; //전공기초일경우 무슨영역인지(예:자연과학계열)
    major?: string; // 전공기초나 전공일 경우 무슨 전공인지
}
