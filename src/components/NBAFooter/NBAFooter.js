import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  color: #333333;
  padding: 0;
  padding-top: 1em;
  margin-top: 1em;
  font-size: 9px;
  text-align: center;
  background: #ffffff;
`;

const P = styled.p`
  margin: 0;
  padding: 0 2px 0 2px;
`;

const Link = styled.a`
  color: #2199e8;
  text-decoration: none;
  line-height: 1.5;
  /* cursor: pointer; */
`;

const AdChoices = styled(Link)`
  cursor: default;
  display: inline-block;
  padding-right: 16px;
  background: url('//i2.cdn.turner.com/nba/nba/.element/img/2.0/sect/adChoices/logo_ad_choices_footer.png')
    right 1px no-repeat;
`;

const Img = styled.img`
  max-width: 75px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NBAFooter = () => {
  return (
    <Container id="nbaGlobalFooter">
      <P>
        Copyright ©<em> {new Date().getFullYear()}</em> NBA Media Ventures, LLC.
        All rights reserved.
      </P>
      <P>
        <Link href="http://www.nba.com/news/privacy_policy.html">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="https://www.nba.com/closed_captioning">
          Accessibility and Closed Caption
        </Link>
        {' | '}
        <Link href="http://www.nba.com/news/termsofuse.html">Terms of Use</Link>
        {' | '}
        <AdChoices
          id="nba_cnsnt_trst"
          href="http://www.nba.com/adchoices"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Ad Choices
        </AdChoices>
      </P>
      <P>
        NBA.com is part of Turner Sports Digital, part of the Turner Sports
        &amp; Entertainment Digital Network.
      </P>
      <Img
        alt="Turner Broadcasting System, Inc. A Time Warner Company."
        src="//i.cdn.turner.com/nba/nba/footer/turner_logo_200x35.png"
      />
    </Container>
  );
};

export default NBAFooter;
