import { SignUp } from "../schemas";
import ErrorMessage from "../../components/ui/ErrorMessage";

type ErrorMessage = {
  errors: string[];
};

export type SignUpActionResponse = {
  success: boolean;
  errors?: {
    [K in keyof SignUp]?: ErrorMessage;
  };
  inputs?: Partial<SignUp>;
  message?: string;
};
