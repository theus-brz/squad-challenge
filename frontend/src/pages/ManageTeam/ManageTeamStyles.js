import styled from 'styled-components';

import { ActionButtonContainer } from '../../components/ActionButton/ActionButtonStyles';
import { InputRadioContainer } from '../../components/InputRadio/InputRadioStyles';
import { InputTagContainer } from '../../components/InputTag/InputTagStyles';
import { InputTextContainer } from '../../components/InputText/InputTextStyles';
import { InputTextAreaContainer } from '../../components/InputTextArea/InputTextAreaStyles';

export const ManageTeamContainerTitle = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.darkGray};
`;

export const ManageTeamInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ManageTeamBlock = styled.div`
  display: flex;
  padding: 45px 25px 35px 25px;
  justify-content: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  ${InputTextContainer} + ${InputTextAreaContainer} {
    padding-top: 35px;
  }

  ${InputTextContainer} + ${InputRadioContainer} {
    padding-top: 35px;
  }

  ${InputRadioContainer} + ${InputTagContainer} {
    padding-top: 35px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ManageTeamContainer = styled.main`
  padding: 35px;
  display: flex;
  flex: 1;
  background-image: ${(props) => props.theme.background};

  ${ManageTeamInformationContainer} + ${ManageTeamInformationContainer} {
    margin-left: 100px;
  }

  @media (max-width: 375px) {
    ${ManageTeamInformationContainer} + ${ManageTeamInformationContainer} {
      margin-left: 0px;
      margin-top: 35px;
    }
  }

  ${ManageTeamBlock}:last-child {
    display: flex;
    padding-top: 0px;
    padding-bottom: 15px;
    justify-content: flex-start;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    ${ActionButtonContainer} {
      padding: 15px;
      width: 100%;
      max-width: 475px;
      border-radius: 5px;
    }
  }
`;
