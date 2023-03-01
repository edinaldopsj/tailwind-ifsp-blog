import * as yup from 'yup';
import { VALIDATION } from '../lang/pt-br/validations';

yup.setLocale({
  string: {
    email: VALIDATION.VALID_EMAIL_MESSAGE,
  },
  mixed: {
    required: VALIDATION.GENERAL_REQUIRED,
    notType: VALIDATION.VALID_TYPE
  },
  date: {
    max: VALIDATION.MAX_DATE
  }
});

export default yup;
