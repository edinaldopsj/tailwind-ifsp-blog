import React from 'react';
import { useForm } from 'react-hook-form';

import { LANG } from '../../../lang/pt-br';
import { defaultValues, resolver } from './validation';
import Button from '../../../components/Button/Button';

function ChangePasswordForm(props) {
  const { onValidate } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({ defaultValues, resolver });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ data }) => {
    // Should use the data to validate the password

    onValidate();
  };

  const handleClearForm = () => {
    reset();
    setFocus('oldPassword');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-48 flex flex-col gap-2"
    >
      <label htmlFor="oldPassword">
        {LANG.CHANGE_PASSWORD.FORM.OLD_PASSWORD}
        : *
      </label>
      <input
        className={`border border-black w-full p-3 ${errors?.oldPassword && 'hover:border-red-500 enabled:border-red-500'
        }`}
        id="oldPassword"
        name="oldPassword"
        type="password"
        placeholder="ex.: !SenhaSegura356"
        {...register('oldPassword')}
      />

      <label htmlFor="confirmOldPassword">
        {LANG.CHANGE_PASSWORD.FORM.CONFIRM_PASSWORD}
        : *
      </label>
      <input
        className={`border border-black w-full p-3 ${errors?.confirmOldPassword && 'hover:border-red-500 enabled:border-red-500'
        }`}
        id="confirmOldPassword"
        name="confirmOldPassword"
        type="password"
        placeholder="ex.: !SenhaSegura356"
        {...register('confirmOldPassword')}
      />

      <label htmlFor="newPassword">
        {LANG.CHANGE_PASSWORD.FORM.NEW_PASSWORD}
        : *
      </label>
      <input
        className={`border border-black w-full p-3 ${errors?.newPassword && 'hover:border-red-500 enabled:border-red-500'
        }`}
        id="newPassword"
        name="newPassword"
        type="password"
        placeholder="ex.: !SenhaSegura356"
        {...register('newPassword')}
      />

      {/* Buttons */}
      <section className="flex flex-row justify-between">
        <Button
          label={LANG.CHANGE_PASSWORD.FORM.CANCEL_BUTTON}
          onClick={handleClearForm}
        />
        <Button
          type="submit"
          label={LANG.CHANGE_PASSWORD.FORM.CONFIRM_BUTTON}
        />
      </section>
    </form>
  );
}

ChangePasswordForm.propTypes = {
  onValidate: 'function',
};

ChangePasswordForm.defaultProps = {
  onValidate: () => {},
};

export default ChangePasswordForm;
