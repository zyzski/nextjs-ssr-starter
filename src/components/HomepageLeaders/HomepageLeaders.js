import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import StyledLink from '../StyledLink';

const HomepageSection = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const LeadersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const LeadersColumn = styled.div`
  /* margin-bottom: 10px; */
  padding: 10px;
`;

const LeadersTable = styled.table`
  font-size: 0.9rem;
  width: 100%;

  & tbody {
    width: 100%;
  }

  & tr {
    width: 100%;
  }
`;

const StatCell = styled.td`
  text-align: right;

  ${props => props.bold && 'font-weight: bold;'}
`;

const TeamAbbr = styled.span`
  font-style: italic;
  color: #757575;
  font-size: 0.7rem;
  padding: 0px 5px;
`;

const StatTitle = styled.h3`
  font-size: 1rem;
`;

const HomepageLeaders = ({ title, items }) => {
  if (!items) {
    return false;
  }

  return (
    <HomepageSection>
      <SectionTitle>{title}</SectionTitle>
      <LeadersGrid>
        {items.map(section => (
          <LeadersColumn key={section.title}>
            <StatTitle>{section.title}</StatTitle>
            <LeadersTable>
              <tbody>
                {section.playerstats.map((player, index) => (
                  <tr key={player.PLAYER_ID}>
                    {/* <td>{index + 1}.</td> */}

                    <td>
                      <Link href={`/player/${player.PLAYER_ID}`}>
                        <StyledLink>{player.PLAYER_NAME}</StyledLink>
                      </Link>
                      <TeamAbbr> {player.TEAM_ABBREVIATION}</TeamAbbr>
                    </td>
                    <StatCell bold={index === 0}>
                      {player[section.name]}
                    </StatCell>
                  </tr>
                ))}
              </tbody>
            </LeadersTable>
          </LeadersColumn>
        ))}
      </LeadersGrid>
    </HomepageSection>
  );
};

export default HomepageLeaders;
