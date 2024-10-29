// Userstate.ts
import { atom } from "recoil";

export interface UserInfo {
  name: string;
}

export const userInfoState = atom<UserInfo | null>({
  key: 'userInfoState', // 고유 키
  default: null,
});