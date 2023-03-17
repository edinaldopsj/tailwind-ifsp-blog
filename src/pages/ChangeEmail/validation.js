import yup from "../../config/yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  oldEmail: yup.string().email().required(),
  newEmail: yup.string().email().required(),
});

const defaultValues = {
  oldEmail: "",
  newEmail: "",
};

const resolver = yupResolver(validationSchema);

export { resolver, defaultValues }
