import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../src/components/Layout/Layout';
import StyledLink from '../src/components/StyledLink/StyledLink';

const PostPage = props => (
  <Layout>
    <h1>Post {props.id}</h1>
    <h2>A sample post with data fetching</h2>

    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <a>{show.name}</a>
        </li>
      ))}
    </ul>

    <Link href="/">
      <StyledLink>Back</StyledLink>
    </Link>
  </Layout>
);

PostPage.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show),
  };
};

export default PostPage;
