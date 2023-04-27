import React from 'react';
import PropTypes from 'prop-types';

function ErrorLabel(props) {
  const { message } = props;

  if (message) {
    return <div className="mb-3 text-normal text-red-500">{message}</div>;
  }

  return null;
}

ErrorLabel.propTypes = {
  message: PropTypes.string,
};

ErrorLabel.defaultProps = {
  message: '',
};

export default ErrorLabel;
