import React from 'react';

import PropTypes from 'prop-types';

import { NameInitialsContainer } from './NameInitialsStyles';

function NameInitials({ name }) {
  const splittedName = name.split(' ');
  let initials = splittedName[0].charAt(0);
  initials += splittedName[1].charAt(0);

  return <NameInitialsContainer>{initials}</NameInitialsContainer>;
}

NameInitials.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NameInitials;
