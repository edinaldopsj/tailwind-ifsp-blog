import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Information button
 * @param {object} props Button props
 * @param {string} props.label Button label
 * @param {string} props.color Button color
 * @returns {JSX.Element} Information button
 */

function ColorButton({
  className, children, color, onClick,
}) {
  const colorClass = useMemo(() => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 bg-blue-200 text-gray-600 hover:bg-blue-300';
      case 'red':
        return 'border-red-200 bg-red-200 text-gray-600 hover:bg-red-300';
      case 'yellow':
        return 'border-yellow-200 bg-yellow-200 text-gray-600 hover:bg-yellow-300';
      case 'green':
        return 'border-green-200 bg-green-200 text-gray-600 hover:bg-green-300';
      default:
        return 'border-gray-200 bg-gray-200 text-gray-600 hover:bg-gray-300';
    }
  }, [color]);

  const otherClasses = 'focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:outline-none text-gray-600 text-sm leading-none rounded ';

  return (
    <Button
      className={`${colorClass} ${otherClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

ColorButton.defaultProps = {
  children: null,
  className: '',
  color: 'blue',
  onClick: () => {},
};

ColorButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorButton;
