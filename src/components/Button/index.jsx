import React from 'react';

function Button(props) {
  const { label, type, onClick } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 border-2 hover:bg-gray-200"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: 'string',
  type: 'string',
  onClick: 'function',
};

Button.defaultProps = {
  label: 'Enviar',
  type: 'button',
  onClick: () => {},
};

export default Button;
