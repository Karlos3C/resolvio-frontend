"use server";

import { formatErrorsKeyValue, formatLaravelErrorsKeyValue } from "@/lib/utils";
import { SuccessSchema } from "@/src/schemas";
import { SignUp, SignUpSchema } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";

export async function signUp(prevState: ActionResponse<SignUp>, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_confirmation: formData.get("password_confirmation") as string,
    area_id: formData.get("area_id") as string,
  };

  const signUp = SignUpSchema.safeParse(rawData);

  if (!signUp.success) {
    return {
      errors: formatErrorsKeyValue(signUp.error),
      success: "",
      inputs: rawData,
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/sign-up`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(signUp.data),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatLaravelErrorsKeyValue(json),
      inputs: rawData,
    };
  }
  const success = SuccessSchema.parse(json);
  return {
    success: success.message,
  };
}
