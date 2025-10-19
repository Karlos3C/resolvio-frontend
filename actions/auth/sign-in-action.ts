"use server";

import { formatArrayErrors, formatErrorsKeyValue, formatLaravelErrorsKeyValue } from "@/lib/utils";
import { LoginResponse, SignIn, SignInSchema } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";
import { cookies } from "next/headers";

export async function signIn(
  prevState: ActionResponse<SignIn>,
  formData: FormData
): Promise<ActionResponse<SignIn>> {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const signIn = SignInSchema.safeParse(rawData);

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

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatArrayErrors(json),
    };
  }

  const success = LoginResponse.parse(json);

  const cookie = await cookies();
  cookie.set({
    name: "RESOLVIO_TOKEN",
    value: success.data.access_token,
    httpOnly: true,
    path: "/",
  });

  return {
    success: success.message,
  };
}
