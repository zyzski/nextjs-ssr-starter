import Link from 'next/link';

import Layout from '../src/components/Layout/Layout';
import StyledLink from '../src/components/StyledLink/StyledLink';

const Index = () => (
  <Layout>
    <h1>Welcome to the index page</h1>
    <Link href="/post/1">
      <StyledLink>View Post</StyledLink>
    </Link>
  </Layout>
);

export default Index;
