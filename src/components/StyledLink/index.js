import React from 'react';
import styled from 'styled-components';

const L = styled.a`
  color: #1976d2;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = props => {
  return <L {...props}>{props.children}</L>;
};

export default StyledLink;
