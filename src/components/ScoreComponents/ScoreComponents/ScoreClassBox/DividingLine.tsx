import React from 'react';
import styled from 'styled-components';

const StyledDividingLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dividing};
  margin: 20px 0;
`;

const DividingLine: React.FC = () => {
  return <StyledDividingLine />;
};

export default DividingLine;