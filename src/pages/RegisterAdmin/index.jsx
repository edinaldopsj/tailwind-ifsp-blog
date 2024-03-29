import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';

import ErrorLabel from '../../components/ErrorLabel';
import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';

import { LANG } from '../../lang/pt-br';
import { defaultValues, resolver } from '../RegisterAuthor/validation';

export default function RegisterAdmin() {
  const {
    reset,
    handleSubmit,
    formState: { errors },
    setFocus,
    register,

  } = useForm({ defaultValues, resolver });

  const handleClearForm = () => {
    reset();
    setFocus('name');
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    // TODO: insert data in database
  };

  return (
    <Wrapper>
      <Title title={LANG.REGISTER_ADMIN.TITLE} />
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="name">{LANG.REGISTER_ADMIN.FORM.NAME}</label>
          <input
            className={`border border-black w-full p-3 ${errors?.name && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="name"
            type="text"
            placeholder="Digite seu nome"
            {...register('name')}
          />
          {errors?.name ? <ErrorLabel message={errors.name.message} /> : null}

          <label htmlFor="email">{LANG.REGISTER_ADMIN.FORM.EMAIL}</label>
          <input
            className={`border border-black w-full p-3 ${errors?.email && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="email"
            type="email"
            placeholder="E-Mail*"
            {...register('email')}
          />
          {errors?.email ? <ErrorLabel message={errors.email.message} /> : null}

          <label htmlFor="birthday">
            {LANG.REGISTER_READER.FORM.BIRTHDAY}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.birthday && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="birthday"
            type="date"
            placeholder="Data Nascimento*"
            {...register('birthday')}
          />
          {errors?.birthday ? <ErrorLabel message={errors.birthday.message} /> : null}

          <label htmlFor="password">
            {LANG.REGISTER_READER.FORM.PASSWORD}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.birthday && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="password"
            type="password"
            placeholder="Senha Forte*"
            {...register('password')}
          />
          {errors.password ? <ErrorLabel message={errors.password.message} /> : null}

          <label htmlFor="password">
            {LANG.REGISTER_READER.FORM.CONFIRM_PASSWORD}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.confirmPassword && 'hover:border-red-500 enabled: border-red-500'
            }`}
            name="confirmPassword"
            type="password"
            placeholder="Senha Forte*"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword ? <ErrorLabel message={errors.confirmPassword.message} /> : null}

          {/* Buttons */}
          <section className="flex justify-row justify-between">
            <Button
              label={LANG.REGISTER_READER.FORM.CANCEL_BUTTON}
              onClick={handleClearForm}
            />

            <Button
              type="submit"
              label={LANG.REGISTER_READER.FORM.CONFIRM_BUTTON}
              onClick={onSubmit}
            />
          </section>
        </form>
      </main>

    </Wrapper>
  );
}
