import { atom } from "recoil";
import { UserData } from "../types/Mypage";

export const userDataState = atom<UserData  | null>({
    key: 'userDataState', // 고유 키
    default: null,
});