import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import {
  verificationFormDefaultValues,
  verificationFormResolver,
} from './validationVerificationForm';
import { LANG } from '../../../lang/pt-br';

function VerificationForm(props) {
  const { onValidate } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({ verificationFormDefaultValues, verificationFormResolver });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ data }) => {
    // Should use the data to validate the password
  };

  const handleClearForm = () => {
    reset();
    setFocus('verificationCode');
    onValidate();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-48 flex flex-col gap-2"
    >
      <label htmlFor="verificationCode">
        {LANG.CHANGE_PASSWORD.VERIFICATION_FORM.CODE}
        : *
      </label>
      <input
        className={`border border-black w-full p-3 ${errors?.verificationCode && 'hover:border-red-500 enabled:border-red-500'
        }`}
        id="verificationCode"
        name="verificationCode"
        type="text"
        placeholder="ex.: XyZ123FJFh"
        {...register('verificationCode')}
      />

      {/* Buttons */}
      <section className="flex flex-row justify-between">
        <Button
          label={LANG.CHANGE_PASSWORD.FORM.CANCEL_BUTTON}
          onClick={handleClearForm}
        />
        <Button
          type="submit"
          label={LANG.CHANGE_PASSWORD.VERIFICATION_FORM.CONFIRM_BUTTON}
        />
      </section>
    </form>
  );
}

VerificationForm.propTypes = {
  onValidate: 'function',
};

VerificationForm.defaultProps = {
  onValidate: () => {},
};

export default VerificationForm;
