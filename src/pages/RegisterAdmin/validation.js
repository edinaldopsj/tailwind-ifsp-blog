import yup from "../../config/yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], VALIDATION.PASSWORD_MATCH_MESSAGE)
    .required()
})

const defaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const resolver = yupResolver(validationSchema);

export {defaultValues, resolver}
