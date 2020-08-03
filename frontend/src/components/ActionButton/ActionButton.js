import React from 'react';

import PropTypes from 'prop-types';

import { ActionButtonContainer } from './ActionButtonStyles';

export default function ActionButton({ title, onClick }) {
  return (
    <ActionButtonContainer id="action-button" onClick={onClick}>
      {title}
    </ActionButtonContainer>
  );
}

ActionButton.propTypes = {
  title: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
