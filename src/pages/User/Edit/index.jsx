import React from 'react';
import { useForm } from 'react-hook-form';

import Wrapper from '../../../components/layout/Wrapper';
import Title from '../../../components/Title';

import { LANG } from '../../../lang/pt-br';
import { defaultValues, resolver } from './validation';
import ErrorLabel from '../../../components/ErrorLabel';
import Button from '../../../components/Button/Button';

export default function ChangeEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ data }) => {
    // TODO: submit the data
  };

  const handleClearForm = () => {
    reset();
  };

  return (
    <Wrapper>
      <Title title={LANG.EDIT_USER.TITLE} />

      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="email">
            {LANG.EDIT_USER.FORM.EMAIL}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.email && 'hover:border-red-500 enabled:border-red-500'
            }`}
            id="email"
            name="email"
            type="text"
            placeholder="ex.: email@email.com"
            {...register('email')}
          />
          {errors?.email ? <ErrorLabel message={errors.email.message} /> : null}

          <label htmlFor="birthday">
            {LANG.EDIT_USER.FORM.BIRTHDAY}
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

          {/* Buttons */}
          <section className="flex flex-row justify-between">
            <Button
              onClick={handleClearForm}
            >
              {LANG.EDIT_USER.FORM.CANCEL_BUTTON}
            </Button>
            <Button
              type="submit"
            >
              {LANG.EDIT_USER.FORM.CONFIRM_BUTTON}
            </Button>
          </section>
        </form>
      </main>
    </Wrapper>
  );
}
