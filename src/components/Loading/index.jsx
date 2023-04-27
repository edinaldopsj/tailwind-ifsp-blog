import React from 'react';
import PropTypes from 'prop-types';
/**
 * Loading component
 * @module components/Loading
 * @param {Object} props - the React Prop that contains data
 * @param {boolean} props.fullscreen - if the loading should be fullscreen
  * @returns {JSX.Element}
 */
function Loading({ fullscreen }) {
  const isFullscreenClass = fullscreen ? 'h-screen' : 'h-96';

  return (
    <div className={`flex justify-center items-center ${isFullscreenClass}`}>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
    </div>
  );
}

Loading.propTypes = {
  fullscreen: PropTypes.bool,
};

Loading.defaultProps = {
  fullscreen: false,
};

export default Loading;
