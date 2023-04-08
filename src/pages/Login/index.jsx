import React from 'react';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';

export default function Login() {
  return (
    <Wrapper>
      <main className="pt-32">
        <Title title="Tela de Login" />
        <form className="bg-grey-lightest px-48">
          <div className="mb-3">
            <input className="border w-full p-3" name="email" type="text" placeholder="E-Mail" />
          </div>
          <div className="mb-6">
            <input className="border w-full p-3" name="password" type="password" placeholder="**************" />
          </div>
          <div className="flex justify-between">
            <Button label="Registrar-se" />
            <Button label="Esqueceu senha?" />
          </div>
        </form>
      </main>
    </Wrapper>
  );
}
