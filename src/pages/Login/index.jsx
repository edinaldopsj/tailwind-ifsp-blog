import React from 'react';
import Login from './login';

function LoginPage() {
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Login onSubmit={onSubmit} />
  );
}

export default LoginPage;
