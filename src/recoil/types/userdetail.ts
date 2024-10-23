export interface userInfoType {
    name: string;
    majorArea: string;
    major: string; // 전공
    doubleMajorArea?: string,
    doubleMajor?: string; // 복수전공일 경우
    minor?: string; // 부전공일 경우
    attendedClasses: number[]; // 수강했던 과목의 classId 배열
}