import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import StyledLink from '../StyledLink';

const Container = styled.aside`
  width: 25%;
`;

const SidebarPromo = styled.button`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  transition: box-shadow 0.2s ease;
  border-radius: 3px;
  background-color: #f4f4f4;
  text-align: center;
  margin: 0.75em auto 1.5em;
  display: block;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(100, 100, 100, 0.3);
  }
`;

const HomepageSidebar = () => {
  return (
    <Container>
      <SidebarPromo>Daily Lineups</SidebarPromo>
    </Container>
  );
};

export default HomepageSidebar;
