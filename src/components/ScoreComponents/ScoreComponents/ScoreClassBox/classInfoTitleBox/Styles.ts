import styled from 'styled-components';

export const Container = styled.div`
    display: flex; /* 가로 정렬 */
    justify-content: space-between; /* 각 항목 간 간격 동일하게 분배 */
    width: 100%; /* 컨테이너의 전체 너비 설정 */
    font-size: 0.8rem;
    p {
        margin: 0 5px; /* 텍스트 간의 간격 조정 */
    }
`;