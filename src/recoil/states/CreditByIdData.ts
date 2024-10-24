import { atom } from 'recoil';
import { creditByIdInfo } from '../types/creditById';

export const CreditByIdData = atom<creditByIdInfo>({
    key: 'CreditByIdData',
    default: 
    {
        studentYear: 23,  // 2023년 입학
        basicGeneralCredit: 13,  // 기초교양 13학점
        coreGeneralCredit: 15,   // 중핵교양 15학점
        freeGeneralCredit: 0,    // 자유교양 0학점
    }
});

