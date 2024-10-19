const colors = {
    white: '#ffffff',
    black: '#000000',
}as const;

export const theme = {
    colors,
};

export type Theme = typeof theme;

// color: ${({ theme }) => theme.colors.white};로 사용