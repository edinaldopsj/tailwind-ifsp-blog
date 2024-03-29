import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import ErrorLabel from '../../components/ErrorLabel';
import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';

import { LANG } from '../../lang/pt-br';
import { defaultValues, resolver } from './validation';

function Login({ onSubmit }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({ defaultValues, resolver });

  const handleClearForm = () => {
    reset();
    setFocus('email');
  };

  return (
    <Wrapper>
      <Title title={LANG.LOGIN.TITLE} />
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="nickname">
            {LANG.REGISTER_AUTHOR.FORM.NICKNAME}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.nickname && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="nickname"
            type="text"
            placeholder="Apelido*"
            {...register('nickname')}
          />
          {errors?.nickname ? (
            <ErrorLabel message={errors.nickname.message} />
          ) : null}

          <label htmlFor="password">
            {LANG.REGISTER_READER.FORM.PASSWORD}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.birthday && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="password"
            type="password"
            placeholder="Senha Forte*"
            {...register('password')}
          />
          {errors.password ? (
            <ErrorLabel message={errors.password.message} />
          ) : null}

          {/* Buttons */}
          <section className="flex justify-row justify-between">
            <Button onClick={handleClearForm} defaultButton>
              {LANG.REGISTER_READER.FORM.CANCEL_BUTTON}
            </Button>
            <Button type="submit" defaultButton>
              {LANG.REGISTER_READER.FORM.CONFIRM_BUTTON}
            </Button>
          </section>
        </form>
      </main>
    </Wrapper>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Login.defaultValues = {
  onSubmit: () => {},
};

export default Login;
