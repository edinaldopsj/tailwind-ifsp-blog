import React from 'react';
import PropTypes from 'prop-types';

function TitleVariant1({ title }) {
  return (
    <>
      <span className="text-base text-red-500 font-bold">{'<?'}</span>
      <span className="font-semibold leading-tight text-base">echo</span>
      <span className=" hover:text-red-700">
        (
        {title}
        )
      </span>
      <span className="text-base text-red-500 font-bold">{'?>'}</span>
    </>
  );
}

TitleVariant1.defaultProps = {
  title: 'IFSP Blog - News!',
};

TitleVariant1.propTypes = {
  title: PropTypes.string,
};

export default TitleVariant1;
