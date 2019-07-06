import React from 'react';

import Layout from '../Layout/Layout';
import CenterContent from '../CenterContent';
import NBAHeader from '../NBAHeader';
import NBAFooter from '../NBAFooter/NBAFooter';
import StatsInnerNav from '../StatsInnerNav/StatsInnerNav';

const MaxWidthPageLayout = ({ children }) => {
  return (
    <Layout>
      <NBAHeader />
      <StatsInnerNav />
      <CenterContent padding={15}>{children}</CenterContent>
      <NBAFooter />
    </Layout>
  );
};

export default MaxWidthPageLayout;
