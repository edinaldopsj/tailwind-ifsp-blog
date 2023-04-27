import React from 'react';
import Text from '../../components/Typography/Text';
import Wrapper from '../../components/layout/Wrapper';

function SuccessCreation() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center text-center gap-10 mt-24 mx-10">
        <Text size="text-3xl" className="font-bold">
          Cadastro efetuado com sucesso!
        </Text>
        <div className="flex flex-col gap-4">
          <Text as="p" size="text-xl">
            Seu cadastro foi efetuado com sucesso!
          </Text>
          <Text as="p" size="text-xl">
            Agora é só visitar sua caixa de email e verificar o link de
            confirmação.
          </Text>
          <Text as="p" size="text-xl">
            Logo depois, clique no botão de login, acima, para
            acessar sua conta.
          </Text>
        </div>
      </div>
    </Wrapper>
  );
}

export default SuccessCreation;
