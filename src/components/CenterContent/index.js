import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  ${props =>
    props.padding &&
    `
    padding: ${props.padding}px
  `}
`;

const CenterContent = ({ children, padding }) => {
  return <Container padding={padding}>{children}</Container>;
};

export default CenterContent;
