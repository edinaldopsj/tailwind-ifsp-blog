import yup from "../../config/yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { VALIDATION } from "../../lang/pt-br/validations";

const validationSchema = yup.object({
  name: yup.string().required(),
  nickname: yup.string().required(),
  email: yup.string().email().required(),
  birthday: yup.date().max(new Date()).required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], VALIDATION.PASSWORD_MATCH_MESSAGE)
    .required(),
});

const defaultValues = {
  name: "",
  nickname: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues }
