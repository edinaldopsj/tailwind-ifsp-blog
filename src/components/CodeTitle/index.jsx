import React, { useMemo } from 'react';
import TitleVariant1 from './Variant1';
import TitleVariant2 from './Variant2';
import TitleVariant3 from './Variant3';

function CodeTitle({ title }) {
  const variants = useMemo(() => [
    <TitleVariant1 title={title} />,
    <TitleVariant2 title={title} />,
    <TitleVariant3 title={title} />,
  ], [title]);

  return (variants[Math.floor(Math.random() * 3)]);
}

export default CodeTitle;
