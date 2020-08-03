import React from 'react';

import RESOURCES from '../../constants/RESOURCES';
import customer from '../../mocks/customer';
import NameInitials from '../NameInitials/NameInitials';
import {
  WebHeaderContainer,
  WebHeaderTitleArea,
  WebHeaderTitle,
  WebHeaderCustomerArea,
  WebHeaderCustomer,
  WebHeaderLogo,
} from './WebHeaderStyles';

function WebHeader() {
  const {
    WEB_HEADER: { HEADER_TITLE },
  } = RESOURCES;
  const { customerName } = customer;

  return (
    <WebHeaderContainer>
      <WebHeaderTitleArea>
        <WebHeaderLogo />
        <WebHeaderTitle id="web-header-title">{HEADER_TITLE}</WebHeaderTitle>
      </WebHeaderTitleArea>
      <WebHeaderCustomerArea>
        <WebHeaderCustomer>{customerName} </WebHeaderCustomer>
        <NameInitials name={customerName} />
      </WebHeaderCustomerArea>
    </WebHeaderContainer>
  );
}

export default WebHeader;
