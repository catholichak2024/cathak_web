export interface userInfoType {
    name: string;
    userid: number;  //웹에서 부여한 사용자번호
    id: string; //사용자가 입력한 아이디
    studentid: number;
    major_type: string;
    major: string; // 전공
    doubleMajor?: string; // 복수전공일 경우
    minor?: string; // 부전공일 경우
    attendedClasses: number[]; // 수강했던 과목의 classId 배열

}