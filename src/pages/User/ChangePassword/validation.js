import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../../config/yup';

const validationSchema = yup.object({
  oldPassword: yup.string().required(),
  confirmOldPassword: yup.string().required(),
  newPassword: yup.string().required(),
});

const defaultValues = {
  oldPassword: '',
  confirmOldPassword: '',
  newPassword: '',
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues };
