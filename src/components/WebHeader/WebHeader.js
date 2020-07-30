import React from 'react';

import {
  WebHeaderContainer,
  WebHeaderTitleArea,
  WebHeaderTitle,
  WebHeaderCustomerArea,
  WebHeaderCustomer,
} from './WebHeaderStyles';

function WebHeader() {
  return (
    <WebHeaderContainer>
      <WebHeaderTitleArea>
        <div
          style={{
            width: `65px`,
            height: `58px`,
            background: `url(https://www.venturus.org.br/wp-content/themes/vent-theme/assets/img/logo-new.svg) left top`,
            backgroundSize: `200px 56px`,
            backgroundRepeat: `no-repeat`,
            border: `none`,
          }}
        />
        <WebHeaderTitle>Squad management tool</WebHeaderTitle>
      </WebHeaderTitleArea>
      <WebHeaderCustomerArea>
        <WebHeaderCustomer>John Doe</WebHeaderCustomer>
        <>JD</>
      </WebHeaderCustomerArea>
    </WebHeaderContainer>
  );
}

export default WebHeader;
