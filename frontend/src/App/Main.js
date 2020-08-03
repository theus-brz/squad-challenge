import React from 'react';

import PageFooter from '../components/PageFooter/PageFooter';
import WebHeader from '../components/WebHeader/WebHeader';
import Routes from '../routes';
import { MainContainer } from './MainStyles';

function Main() {
  return (
    <MainContainer>
      <WebHeader />
      <Routes />
      <PageFooter />
    </MainContainer>
  );
}

export default Main;
