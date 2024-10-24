import styled from 'styled-components';

export const Layout = styled.div`
    background-color: white;
    border-radius: 1rem;
`;

export const ClassBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem; // 수업 간 간격
    width: 280px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem;
    border-bottom: 1px solid #ccc;
`;

export const ClassName = styled.div`
    flex: 1;
    font-size: 0.6rem; 
`;

export const Credit = styled.div`
    margin-right: 3.7rem;
    font-size: 0.6rem;
`;
