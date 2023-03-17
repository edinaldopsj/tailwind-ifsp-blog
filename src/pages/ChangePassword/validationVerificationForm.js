import yup from "../../config/yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  code: yup.string().required(),
});

const verificationFormDefaultValues = {
  code: "",
};

const verificationFormResolver = yupResolver(validationSchema);

export { verificationFormResolver, verificationFormDefaultValues }
