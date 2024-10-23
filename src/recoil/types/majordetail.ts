export interface MajorAreaInfoType {
    areaname: string; // 영역 이름
    relatedMajors: MajorInfoType[]; // 영역 관련 과배열
}

export interface MajorInfoType {
    name: string; // 학과 이름
    relatedbasicgeneral: string; // 해당 학과와 관련된 기초교양설명
    coregeneralText: string; // 중핵 필수가 뭔지설명
    freegeneralText: string; //자유 교양 뭔지 설명
    mainAreaMajorBasicsText: string;
    otherAreaMajorBasicsText : string; //타계열 설명
    major1 : string; //1전공 설명
    major2 : string; //복수전공일경우 설명
    minor : string; //부전공있을경우 설명 
    othermajor: string //타전공있을경우 설명
}