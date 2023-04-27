import React from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Login from './login';
import { login } from '../../providers/news/user';
import { ROUTE_NAMES } from '../../router/names';

function LoginPage() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { nickname, password } = data;
    const loginData = await login({ nickname, password });

    if (loginData?.data === '0') {
      toast('Usuário não encontrado ou senha inválida', { type: 'error' });
    }

    if (loginData?.data) {
      setCookie('token', loginData.data, { path: '/' });
      toast('Login realizado com sucesso', { type: 'success' });

      navigate(ROUTE_NAMES.ROOT);
    }
  };

  return (
    <Login onSubmit={onSubmit} />
  );
}

export default LoginPage;
