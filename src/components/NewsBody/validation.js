import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../config/yup';

const validationSchema = yup.object({
  commentary: yup.string().required(),
});

const defaultValues = {
  commentary: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
