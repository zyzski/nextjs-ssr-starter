import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: blue;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = props => {
  return <A {...props}>{props.children}</A>;
};

export default StyledLink;
