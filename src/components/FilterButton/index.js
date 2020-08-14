import React from 'react';
import PropTypes from 'prop-types';

import './FilterButton.css';

const FilterButton = ({
  name,
  value,
  disabled,
  onClick,
  children,
}) => (
  <button
    type="button"
    className="filter-btn"
    name={name}
    value={value}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

FilterButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

FilterButton.defaultProps = {
  name: '',
  value: '',
  disabled: false,
};

export default FilterButton;
