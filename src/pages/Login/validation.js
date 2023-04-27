import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../config/yup';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const defaultValues = {
  email: '',
  password: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
