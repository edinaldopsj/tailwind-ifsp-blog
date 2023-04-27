import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../config/yup';

const validationSchema = yup.object({
  nickname: yup.string().required(),
  password: yup.string().required(),
});

const defaultValues = {
  nickname: '',
  password: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
