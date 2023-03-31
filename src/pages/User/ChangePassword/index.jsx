import React from "react";

import Wrapper from "../../../components/layout/Wrapper";
import Title from "../../../components/Title";

import { useToggle } from "../../../hooks/useToggle";

import { LANG } from "../../../lang/pt-br";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { VerificationForm } from "./VerificationForm";

export default function ChangePassword() {
  const [isValidated, setIsValidated] = useToggle(false);

  return (
    <Wrapper>
      <Title title={LANG.CHANGE_PASSWORD.TITLE} />
      <main>
        {!isValidated ? <ChangePasswordForm onValidate={() => setIsValidated(true)} />  : null}
        {isValidated ? <VerificationForm onValidate={() => setIsValidated(false)} />  : null}
      </main>
    </Wrapper>
  );
}
