import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import {
  InputTagTitle,
  InputTagContainer,
  InputTagArea,
  InputTagInput,
  InputTagTag,
  InputTagName,
  InputTagButton,
} from './InputTagStyles';

function InputTag({
  tags,
  tagButton,
  inputTitle,
  inputName,
  inputPlaceholder,
  inputOnChange,
  inputValue,
  inputOnKeyDown,
}) {
  return (
    <InputTagContainer>
      <InputTagTitle>{inputTitle}</InputTagTitle>

      <InputTagArea>
        {tags.map((tag) => (
          <InputTagTag key={tag} style={{ display: 'flex' }}>
            <InputTagName>{tag}</InputTagName>
            <InputTagButton onClick={() => tagButton(tag)}>
              <CloseIcon />
            </InputTagButton>
          </InputTagTag>
        ))}

        <InputTagInput
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={inputOnChange}
          value={inputValue}
          onKeyDown={inputOnKeyDown}
        />
      </InputTagArea>
    </InputTagContainer>
  );
}

InputTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  tagButton: PropTypes.func.isRequired,
  inputTitle: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputOnChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputOnKeyDown: PropTypes.func.isRequired,
};

InputTag.defaultProps = {
  tags: [],
  inputPlaceholder: '',
};

export default InputTag;
