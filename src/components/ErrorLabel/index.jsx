import React from 'react';

function ErrorLabel(props) {
  const { message = false } = props;

  if (message) {
    return <div className="mb-3 text-normal text-red-500">{message}</div>;
  }

  return null;
}

ErrorLabel.propTypes = {
  message: 'boolean',
};

ErrorLabel.defaultProps = {
  message: false,
};

export default ErrorLabel;
