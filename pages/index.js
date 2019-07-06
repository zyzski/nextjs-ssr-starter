import Link from 'next/link';
import styled from 'styled-components';
// import fetch from 'isomorphic-unfetch';

const Title = styled.h1`
  font-family: monospace;
  font-size: 1.2em;
`;

const Index = () => (
  <div>
    <Title>Welcome to the index page</Title>
    <Link href="/post/1">
      <a>View Post</a>
    </Link>
  </div>
);

export default Index;
