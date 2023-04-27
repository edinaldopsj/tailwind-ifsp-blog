import React, { useState } from 'react';
import RegisterReader from './create';
import SuccessCreation from './SuccessCreation';

function RegisterReaderPage() {
  const [hasSubmited, setHasSubmited] = useState(false);
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    // TODO: change this to true only if the request is successful
    setHasSubmited(true);
  };

  return (
    !hasSubmited
      ? <RegisterReader onSubmit={onSubmit} />
      : <SuccessCreation />
  );
}

export default RegisterReaderPage;
