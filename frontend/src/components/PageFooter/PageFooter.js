import React from 'react';

import RESOURCES from '../../constants/RESOURCES';
import { PageFooterContainer } from './PageFooterStyles';

function PageFooter() {
  const {
    PAGE_FOOTER: { COPYRIGHT_TEXT },
  } = RESOURCES;

  return (
    <PageFooterContainer>
      <p id="page-footer-copyright">{COPYRIGHT_TEXT}</p>
    </PageFooterContainer>
  );
}

export default PageFooter;
