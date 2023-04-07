import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../../config/yup';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  birthday: yup.date().max(new Date()).required(),
});

const defaultValues = {
  email: '',
  birthday: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
