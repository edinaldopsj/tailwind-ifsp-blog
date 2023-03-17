import React from "react";
import { useForm } from "react-hook-form";

import Wrapper from "../../components/layout/Wrapper";
import Button from "../../components/Button";
import Title from "../../components/Title";

import { LANG } from "../../lang/pt-br";
import { defaultValues, resolver } from "./validation";

export default function ChangeEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({ defaultValues, resolver });

  const onSubmit = ({ data }) => {
    console.log({ data }, "data");
  };

  const handleClearForm = () => {
    reset();
  }

  return (
    <Wrapper>
      <Title title={LANG.CHANGE_EMAIL.TITLE} />

      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-48 flex flex-col gap-2"
        >
          <label htmlFor="oldEmail">
            {LANG.CHANGE_EMAIL.FORM.OLD_EMAIL}: *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.oldEmail && `hover:border-red-500 enabled:border-red-500`
              }`}
            id="oldEmail"
            name="oldEmail"
            type="text"
            placeholder="ex.: email@email.com"
            {...register("oldEmail")}
          />

          <label htmlFor="newEmail">
            {LANG.CHANGE_EMAIL.FORM.NEW_EMAIL}: *
          </label>
          <input
            className={`border border-black w-full p-3 ${errors?.newEmail && `hover:border-red-500 enabled:border-red-500`
              }`}
            id="newEmail"
            name="newEmail"
            type="text"
            placeholder="ex.: email@email.com"
            {...register("newEmail")}
          />

          {/* Buttons */}
          <section className="flex flex-row justify-between">
            <Button
              label={LANG.CHANGE_EMAIL.FORM.CANCEL_BUTTON}
              onClick={handleClearForm}
            />
            <Button
              type="submit"
              label={LANG.CHANGE_EMAIL.FORM.CONFIRM_BUTTON}
            />
          </section>
        </form>
      </main>
    </Wrapper>
  );
}
