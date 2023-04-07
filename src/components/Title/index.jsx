import React from 'react';

function Title(props) {
  const { title } = props;

  return (
    <header>
      <h1 className="leading-loose text-4xl text-center py-3 uppercase">{title}</h1>
    </header>
  );
}

Title.propTypes = {
  title: 'string',
};

Title.defaultProps = {
  title: 'Title',
};

export default Title;
