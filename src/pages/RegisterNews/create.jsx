import React from 'react';
import { useForm } from 'react-hook-form';

import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';
import ErrorLabel from '../../components/ErrorLabel';

import { defaultValues, resolver } from './validation';
import { LANG } from '../../lang/pt-br';
import ColorButton from '../../components/Button/Color';
import Text from '../../components/Typography/Text';

export default function CreateNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({ defaultValues, resolver });

  const handleClearForm = () => {
    reset();
    setFocus('title');
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    // TODO: add businness logic here
  };

  return (
    <Wrapper>
      <Title title={LANG.CREATE_NEW.TITLE} />
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="title">
            {LANG.CREATE_NEW.FORM.TITLE}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.title && 'hover:border-red-500 enabled:border-red-500'
            }`}
            id="title"
            name="title"
            type="text"
            placeholder="Digite o título"
            {...register('title')}
          />
          {errors?.title ? <ErrorLabel message={errors.title.message} /> : null}

          <label htmlFor="subtitle">
            {LANG.CREATE_NEW.FORM.SUBTITLE}
            : *
          </label>
          <input
            className={`border border-black w-full p-3 ${
              errors?.subtitle && 'hover:border-red-500 enabled:border-red-500'
            }`}
            id="subtitle"
            name="subtitle"
            type="text"
            placeholder="Digite o subtítulo"
            {...register('subtitle')}
          />
          {errors?.subtitle ? <ErrorLabel message={errors.subtitle.message} /> : null}

          <label htmlFor="text">
            {LANG.CREATE_NEW.FORM.TEXT}
            : *
            <textarea
              id="text"
              className="border-2 border-gray-300 rounded-md w-full resize-none"
              rows={15}
              required
            />
          </label>

          {/* Buttons */}
          <section className="flex flex-row justify-between">
            <ColorButton color="secondary" onClick={handleClearForm}>
              <Text>{LANG.CREATE_NEW.FORM.CANCEL_BUTTON}</Text>
            </ColorButton>

            <ColorButton color="secondary" type="submit" onClick={handleClearForm}>
              <Text>{LANG.CREATE_NEW.FORM.CONFIRM_BUTTON}</Text>
            </ColorButton>
          </section>

        </form>

      </main>
    </Wrapper>
  );
}
