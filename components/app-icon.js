import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome.js';

const AppIcon = ({ name, color, size }) => (
  <>
    <FontAwesomeIcon icon={name} size={size} color={color} />
  </>
);

AppIcon.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

AppIcon.defaultProps = {
  size: '2x',
};

export default AppIcon;
