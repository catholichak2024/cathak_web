import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold; 
    color: ${({ theme }) => theme.colors.black};
    margin: 10px 0;
`;

type TextItemProps = {
    text: string;
};

const ClassInfoTitle: React.FC<TextItemProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default ClassInfoTitle;