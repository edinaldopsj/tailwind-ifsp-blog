import React from 'react';
import PropTypes from 'prop-types';

function TitleVariant2({ title }) {
  return (
    <>
      <span className="text-base text-blue-500 font-bold">{'<%'}</span>
      <span className="font-semibold leading-tight text-base">println</span>
      <span className=" hover:text-blue-700">
        (
        {title}
        )
      </span>
      <span className="text-base text-blue-500 font-bold">{'%>'}</span>
    </>
  );
}

TitleVariant2.defaultProps = {
  title: 'IFSP Blog - News!',
};

TitleVariant2.propTypes = {
  title: PropTypes.string,
};

export default TitleVariant2;
