import React from 'react';
import PropTypes from 'prop-types';

function TitleVariant3({ title }) {
  return (
    <>
      <span className="text-base text-green-500 font-bold">{'<%'}</span>
      <span className="font-semibold leading-tight text-base">print</span>
      <span className=" hover:text-green-700">
        (
        {title}
        )
      </span>
      <span className="text-base text-green-500 font-bold">{'%>'}</span>
    </>
  );
}

TitleVariant3.defaultProps = {
  title: 'IFSP Blog - News!',
};

TitleVariant3.propTypes = {
  title: PropTypes.string,
};

export default TitleVariant3;
