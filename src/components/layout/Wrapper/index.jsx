import React from 'react';

function Wrapper(props) {
  const { children, showBorder, showChildrenBorder } = props;

  const borderClass = showBorder ? 'border-2 border-red-400' : '';
  const childrenBorderClass = showChildrenBorder ? 'border-2 border-green-400' : '';

  return (
    <div className={`flex justify-center h-screen ${borderClass}`}>
      <div className={`flex-col justify-center w-full md:w-3/5 xl:4/5 ${childrenBorderClass}`}>
        {children}
      </div>
    </div>
  );
}

Wrapper.propTypes = {
  children: 'node',
  showBorder: 'boolean',
  showChildrenBorder: 'boolean',
};

Wrapper.defaultProps = {
  children: null,
  showBorder: false,
  showChildrenBorder: false,
};

export default Wrapper;
