import { atom } from 'recoil';

export const selectedGradesState = atom<{ [key: number]: string | null }>({
    key: 'selectedGradesState',
    default: {} as { [key: number]: string | null },
});
