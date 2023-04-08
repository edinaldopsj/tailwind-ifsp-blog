import React from 'react';
import PropTypes from 'prop-types';

function Table({ children }) {
  return (
    <div className="sm:px-6 w-full">
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="mt-7 overflow-x-auto">
          <table className="w-full table-fixed">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

Table.defaultProps = {
  children: null,
};

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
