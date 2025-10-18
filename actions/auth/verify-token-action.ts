"use server";

import { formatLaravelErrorsKeyValue, formatZodToLaravelErrors } from "@/lib/utils";
import { SuccessSchema } from "@/src/schemas";
import { VerifyEmail, VerifyEmailSchema } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";

export async function verifyEmailToken(token: string, prevState: ActionResponse<VerifyEmail>) {
  const confirmToken = VerifyEmailSchema.safeParse({ token });

  if (!confirmToken.success) {
    return {
      laravelErr: formatZodToLaravelErrors(confirmToken.error),
      success: "",
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/verify-email`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(confirmToken.data),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatLaravelErrorsKeyValue(json),
    };
  }

  const success = SuccessSchema.parse(json);

  return {
    success: success.message,
  };
}
