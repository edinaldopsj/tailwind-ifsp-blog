import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children, type, onClick, className,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 border-2 ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => {},
  className: '',
};

export default Button;
