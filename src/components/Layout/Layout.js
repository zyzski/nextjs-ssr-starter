// import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = props => {
  return <Container>{props.children}</Container>;
};

export default Layout;
