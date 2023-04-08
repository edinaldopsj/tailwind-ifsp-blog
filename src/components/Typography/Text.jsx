import React from 'react';

/**
 *
 * @param {object} props The react props object
 * @param {string} props.as The html tag to be used
 * @param {string} props.children The children elements
 * @param {string} props.className The classes to be used
 * @param {string} props.color The colorClass to be used
 * @param {string} props.lineHeight The lineHeigthClass to be used
 * @param {string} props.size The sizeClass to be used
 * @returns a text component
 */

function Text({
  as,
  children,
  className,
  color,
  lineHeight,
  size,
  weight,
}) {
  const customClasses = `${color} ${lineHeight} ${size} ${weight}`;

  const Component = React.createElement(as, {
    as,
    className: `${customClasses} ${className}`,
  }, children);

  return Component;
}

Text.defaultProps = {
  as: 'span',
  children: null,
  className: '',
  color: 'text-gray-600',
  lineHeight: 'leading-none',
  size: 'text-base',
  weight: 'font-normal',
};

export default Text;
