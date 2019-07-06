import Link from 'next/link';
import styled from 'styled-components';
import CenterContent from '../CenterContent';

const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: #f3f4f5;
  color: #061d2c;
  font-size: 14px;
`;

const linkPaddingSize = 14;
const linkBorderSize = 4;
const StyledLink = styled.a`
  color: #061d2c;
  text-decoration: none;
  /* transition: all 100ms linear; */
  padding: ${linkPaddingSize}px ${linkPaddingSize}px
    ${linkPaddingSize - linkBorderSize}px ${linkPaddingSize}px;
  border-bottom: 4px solid transparent;

  ${props =>
    props.active &&
    `
    text-decoration: underline;
    border-bottom: 4px solid #0e7ff9;
  `}

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: none;
    border-bottom: 4px solid #0e7ff9;
  }
`;

const StatsInnerNav = () => (
  <CenterContent>
    <Container>
      <Link href="/" passHref>
        <StyledLink>Stats Home</StyledLink>
      </Link>
      <Link href="/players" passHref>
        <StyledLink>Players</StyledLink>
      </Link>
      <Link href="/teams" passHref>
        <StyledLink>Teams</StyledLink>
      </Link>
      {/* <Link href="/scores" passHref> */}
      <StyledLink>Scores</StyledLink>
      {/* </Link> */}
      {/* <Link href="/schedule" passHref> */}
      <StyledLink>Schedule</StyledLink>
      {/* </Link> */}
    </Container>
  </CenterContent>
);

export default StatsInnerNav;
