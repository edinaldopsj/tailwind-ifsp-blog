import React from 'react';
import PropTypes from 'prop-types';

function Wrapper(props) {
  const {
    children, showBorder, showChildrenBorder, className,
  } = props;

  const borderClass = showBorder ? 'border-2 border-red-400' : '';
  const childrenBorderClass = showChildrenBorder ? 'border-2 border-green-400' : '';

  return (
    <div className={`flex justify-center h-screen ${borderClass}`}>
      <div className={`flex-col justify-center w-full lg:w-4/5 2xl:w-3/5  ${childrenBorderClass} ${className}`}>
        {children}
      </div>
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  showBorder: PropTypes.bool,
  showChildrenBorder: PropTypes.bool,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  children: null,
  showBorder: false,
  showChildrenBorder: false,
  className: '',
};

export default Wrapper;
