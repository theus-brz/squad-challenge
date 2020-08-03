import styled from 'styled-components';

export const WebHeaderContainer = styled.header`
  background: ${(props) => props.theme.webHeader};
  color: ${(props) => props.theme.white};
  padding: 5px 25px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    padding: 5px 10px;
  }
`;

export const WebHeaderTitleArea = styled.a`
  display: flex;
  align-items: center;
`;

export const WebHeaderLogo = styled.div`
  width: 40px;
  height: 36px;
  background: url(https://www.venturus.org.br/wp-content/themes/vent-theme/assets/img/logo-new.svg)
    left top;
  background-size: 121px 34px;
  background-repeat: no-repeat;
  border: none;
`;

export const WebHeaderTitle = styled.h1`
  margin-left: 5px;
  font-size: 24px;

  @media (max-width: 411px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const WebHeaderCustomerArea = styled.div`
  display: flex;
  align-items: center;
`;

export const WebHeaderCustomer = styled.div`
  margin-right: 5px;

  @media (max-width: 411px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
