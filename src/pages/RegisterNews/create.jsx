import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Form, Link } from 'react-router-dom';
import Wrapper from '../../components/layout/Wrapper';
import Title from '../../components/Title';
import Text from '../../components/Typography/Text';
import Button from '../../components/Button/Button';
import ErrorLabel from '../../components/ErrorLabel';

import { defaultValues, resolver } from './validation';
import { LANG } from '../../lang/pt-br';
import { ROUTE_NAMES } from '../../router/names';

function CreateNew({ onSubmit, news }) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({ defaultValues, resolver });

  const handleSubmitForm = (data) => {
    let dataToSubmit = data;

    if (news?.id) {
      dataToSubmit = {
        ...data,
        id: news.id,
      };
    }

    onSubmit(dataToSubmit);
    setFocus('title');
    reset();
  };

  const handleClearForm = () => {
    setFocus('title');
    reset();
  };

  useEffect(() => {
    if (news?.id) {
      reset(news);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Title
        title={
          !news?.id ? LANG.CREATE_NEW.CREATE_TITLE
            : LANG.CREATE_NEW.EDIT_TITLE
        }
        className="mt-10"
      />
      <main>
        <Form
          onSubmit={handleSubmit(handleSubmitForm)}
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
          {errors?.subtitle ? (
            <ErrorLabel message={errors.subtitle.message} />
          ) : null}

          <label htmlFor="text">
            {LANG.CREATE_NEW.FORM.TEXT}
            : *
            <textarea
              id="text"
              name="text"
              className={`border border-gray-700 w-full resize-none p-2 ${
                errors?.subtitle
                && 'hover:border-red-500 enabled:border-red-500'
              }`}
              rows={15}
              {...register('text')}
            />
          </label>

          {errors?.text ? <ErrorLabel message={errors.text.message} /> : null}

          {/* Buttons */}
          <section className="flex flex-row justify-between">
            <Button defaultButton onClick={handleClearForm}>
              <Text>{LANG.CREATE_NEW.FORM.CANCEL_BUTTON}</Text>
            </Button>

            <Button type="submit" defaultButton>
              <Text>{LANG.CREATE_NEW.FORM.CONFIRM_BUTTON}</Text>
            </Button>
          </section>
        </Form>
        <div className="flex justify-center">
          <Link
            className="text-blue-400 no-underline"
            to={ROUTE_NAMES.AUTHOR_LIST_NEWS}
          >
            {LANG.NEWS.BACK}
          </Link>
        </div>
      </main>
    </Wrapper>
  );
}

CreateNew.propTypes = {
  onSubmit: PropTypes.func,
  news: PropTypes.shape({
    id: PropTypes.number,
  }),
};

CreateNew.defaultProps = {
  onSubmit: () => {},
  news: {},
};

export default CreateNew;
