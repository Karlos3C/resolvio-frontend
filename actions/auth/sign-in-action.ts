"use server";

import { formatArrayErrors, formatErrorsKeyValue, formatLaravelErrorsKeyValue } from "@/lib/utils";
import { SuccessSchema } from "@/src/schemas";
import { SignIn, SignInResponse } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";

export async function signIn(
  prevState: ActionResponse<SignIn>,
  formData: FormData
): Promise<ActionResponse<SignIn>> {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const signIn = SignInResponse.safeParse(rawData);

  if (!signIn.success) {
    return {
      errors: formatErrorsKeyValue(signIn.error),
      success: "",
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/sign-in`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(signIn.data),
  });

  const json = await req.json();
  console.log(json);

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatArrayErrors(json),
    };
  }

  const success = SuccessSchema.parse(json).message;
  return {
    success,
  };
}
