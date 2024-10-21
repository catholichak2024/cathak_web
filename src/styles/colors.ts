const colors = {
    white: '#ffffff',
    black: '#000000',
    backbasic: '#eff8fe',
    homeback: 'D6E8F1',
}as const;

export const theme = {
    colors,
};

export type Theme = typeof theme;

// color: ${({ theme }) => theme.colors.white};로 사용