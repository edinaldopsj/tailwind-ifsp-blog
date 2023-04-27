import React from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import Login from './login';
import { login } from '../../providers/news/user';

function LoginPage() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);

  const onSubmit = async (data) => {
    const { email, password } = data;
    const loginData = await login({ email, password });

    if (loginData?.data === '0') {
      toast('Usuário não encontrado ou senha inválida', { type: 'error' });
    }

    if (loginData?.data) {
      setCookie('token', loginData.data, { path: '/' });
    }
  };

  return (
    <Login onSubmit={onSubmit} />
  );
}

export default LoginPage;
