import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title component for the page
 * @param {object} props - React props
 * @param {string} props.title - Title of the page
 */
function Title(props) {
  const { title, className } = props;

  return (
    <header>
      <h1 className={`leading-loose text-2xl md:text-4xl text-center py-3 ${className}`}>{title}</h1>
    </header>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  title: 'Title',
  className: '',
};

export default Title;
