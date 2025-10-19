"use server";

import { formatArrayErrors, formatErrorsKeyValue } from "@/lib/utils";
import { SuccessSchema } from "@/src/schemas";
import { ForgotPassword, ForgotPasswordSchema } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";

export async function forgotPassword(
  prevState: ActionResponse<ForgotPassword>,
  formData: FormData
): Promise<ActionResponse<ForgotPassword>> {
  const rawData = {
    email: formData.get("email") as string,
  };

  const forgotPassword = ForgotPasswordSchema.safeParse(rawData);

  if (!forgotPassword.success) {
    return {
      errors: formatErrorsKeyValue(forgotPassword.error),
      success: "",
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/forgot-password`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(forgotPassword.data),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      success: "",
      laravelErr: formatArrayErrors(json),
    };
  }

  const success = SuccessSchema.parse(json).message;

  return { success };
}
