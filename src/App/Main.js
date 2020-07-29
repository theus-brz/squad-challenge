import React from 'react';

import PageFooter from '../components/PageFooter/PageFooter';
import WebHeader from '../components/WebHeader/WebHeader';
import Routes from '../routes';

function Main() {
  return (
    <>
      <WebHeader />
      <Routes />
      <PageFooter />
    </>
  );
}

export default Main;
