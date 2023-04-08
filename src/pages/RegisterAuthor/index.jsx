import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';
import ErrorLabel from '../../components/ErrorLabel';

import { defaultValues, resolver } from './validation';
import { LANG } from '../../lang/pt-br';

export default function RegisterAuthor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({ defaultValues, resolver });

  const handleClearForm = () => {
    reset();
    setFocus('name');
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    // TODO: add businness logic here
  };

  return (
    <Wrapper>
      <Title title={LANG.REGISTER_AUTHOR.TITLE} />

      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="name">
            {LANG.REGISTER_AUTHOR.FORM.NAME}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            {...register('name')}
          />
          {errors?.name ? <ErrorLabel message={errors.name.message} /> : null}

          <label htmlFor="nickname">
            {LANG.REGISTER_AUTHOR.FORM.NICKNAME}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            name="nickname"
            id="nickname"
            type="text"
            placeholder="Apelido*"
            {...register('nickname')}
          />
          {errors?.nickname ? (
            <ErrorLabel message={errors.nickname.message} />
          ) : null}

          <label htmlFor="email">
            {LANG.REGISTER_AUTHOR.FORM.EMAIL}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            name="email"
            id="email"
            type="email"
            placeholder="E-Mail*"
            {...register('email')}
          />
          {errors?.email ? <ErrorLabel message={errors.email.message} /> : null}

          <label htmlFor="birthday">
            {LANG.REGISTER_AUTHOR.FORM.BIRTHDAY}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            name="birthday"
            id="birthday"
            type="date"
            {...register('birthday')}
          />
          {errors?.birthday ? (
            <ErrorLabel message={errors.birthday.message} />
          ) : null}

          <label htmlFor="password">
            {LANG.REGISTER_AUTHOR.FORM.PASSWORD}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            name="password"
            id="password"
            type="password"
            placeholder="Senha forte*"
            {...register('password')}
          />
          {errors?.password ? (
            <ErrorLabel message={errors.password.message} />
          ) : null}

          <label htmlFor="confirmPassword">
            {LANG.REGISTER_AUTHOR.FORM.CONFIRM_PASSWORD}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.name && 'hover:border-red-500 enabled:border-red-500'
            }`}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Senha forte*"
            {...register('confirmPassword')}
          />
          {errors?.confirmPassword ? (
            <ErrorLabel message={errors.confirmPassword.message} />
          ) : null}

          {/* Buttons */}
          <section className="flex flex-row justify-between">
            <Button
              label={LANG.REGISTER_AUTHOR.FORM.CANCEL_BUTTON}
              onClick={handleClearForm}
            />
            <Button
              type="submit"
              label={LANG.REGISTER_AUTHOR.FORM.CONFIRM_BUTTON}
            />
          </section>
        </form>
      </main>
    </Wrapper>
  );
}
