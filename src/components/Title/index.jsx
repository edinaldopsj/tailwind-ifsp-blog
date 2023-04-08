import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title component for the page
 * @param {object} props - React props
 * @param {string} props.title - Title of the page
 */
function Title(props) {
  const { title } = props;

  return (
    <header>
      <h1 className="leading-loose text-2xl md:text-4xl text-center py-3 uppercase">{title}</h1>
    </header>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Title',
};

export default Title;
