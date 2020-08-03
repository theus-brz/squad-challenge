import styled from 'styled-components';

export const InputTagTitle = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: bold;
  font-size: 14px;
`;

export const InputTagContainer = styled.div``;

export const InputTagTag = styled.div`
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 0px 10px;
  height: 20px;
  margin-top: 8px;
  margin-left: 15px;
`;

export const InputTagInput = styled.textarea`
  padding: 10px;
  border: none;
  width: 100%;
  height: 65px;
  border-radius: 5px;
`;

export const InputTagArea = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 5px;
  margin-top: 10px;
`;

export const InputTagName = styled.p`
  padding-right: 10px;
  font-size: 12px;
`;

export const InputTagButton = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.white};
  height: 12px;

  .MuiSvgIcon-root {
    height: 12px;
    width: 12px;
  }
`;
