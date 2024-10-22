export interface classInfoType {
    className: string;
    classId: number; // 수업아이디(사용자id아님)
    credit: number;
    category: '교양' | '전공기초' | '전공'; // 수업의 카테고리
    major?: string; // 전공기초나 전공일 경우 무슨 전공인지
}

export interface classCategoryType {
    type: '교양' | '전공기초' | '전공';  // 카테고리
    classInfoList: classInfoType[];        // 해당 카테고리의 수업 목록
  }