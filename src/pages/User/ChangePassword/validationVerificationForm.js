import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../../config/yup';

const validationSchema = yup.object({
  code: yup.string().required(),
});

const verificationFormDefaultValues = {
  code: '',
};

const verificationFormResolver = yupResolver(validationSchema);

export { verificationFormResolver, verificationFormDefaultValues };
