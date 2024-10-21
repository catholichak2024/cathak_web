const colors = {
    white: '#ffffff',
    black: '#000000',
    backbasic: '#eff8fe',
    homeback: '#d6e8f1',
    navy: '#1a264f',
    alarm: '#ec9696',
    bottomBar: '#cecece',
    gray: '#626262',
}as const;

export const theme = {
    colors,
};

export type Theme = typeof theme;

// color: ${({ theme }) => theme.colors.white};로 사용