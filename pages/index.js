import Head from 'next/head';
import Link from 'next/link';

import Layout from '../src/components/Layout/Layout';
import StyledLink from '../src/components/StyledLink/StyledLink';

const Index = () => (
  <Layout>
    <Head>
      <title>zYzSkI's nextjs starter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Welcome to the index page</h1>
    <Link href="/post/1">
      <StyledLink>View Post</StyledLink>
    </Link>
  </Layout>
);

export default Index;
