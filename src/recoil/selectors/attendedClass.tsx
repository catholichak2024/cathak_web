import { selector } from 'recoil';
import { classListState } from '../states/Classstates';
import { userInfoState } from '../states/Userstate';

//수강한 수업정보
export const attendedClassListState = selector({
    key: 'attendedClassListState',
    get: ({ get }) => {
        const classList = get(classListState); // 전체 수업 목록
        const userInfo = get(userInfoState); // 사용자 정보

        // 수강한 과목만 필터링
        return classList.filter((classItem) =>
            userInfo.attendedClasses.includes(classItem.classId)
        );
    },
});