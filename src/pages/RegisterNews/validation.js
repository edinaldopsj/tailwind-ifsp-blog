import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../config/yup';

const validationSchema = yup.object({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  text: yup.string().required(),
});

const defaultValues = {
  title: '',
  subtitle: '',
  text: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
