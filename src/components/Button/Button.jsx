import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children, type, onClick, className, small, defaultButton,
  } = props;

  let classNames = `px-4 py-2 border-2 ${className}`;

  if (small) {
    classNames = `px-2 py-1 border-2 ${className}`;
  }

  if (defaultButton) {
    classNames += ' text-gray-600 hover:text-gray-900 hover:bg-gray-300';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-2 ${classNames}`}
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
  small: PropTypes.bool,
  defaultButton: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => {},
  className: '',
  small: false,
  defaultButton: false,
};

export default Button;
