"use server";

import { formatArrayErrors, formatErrorsKeyValue } from "@/lib/utils";
import { SuccessSchema } from "@/src/schemas";
import { ResetPassword, ResetPasswordSchema } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";

export async function resetPassword(
  token: string,
  prevState: ActionResponse<ResetPassword>,
  formData: FormData
): Promise<ActionResponse<ResetPassword>> {
  const rawData = {
    password: formData.get("password") as string,
    password_confirmation: formData.get("password_confirmation") as string,
  };

  const resetPassword = ResetPasswordSchema.safeParse(rawData);

  if (!resetPassword.success) {
    return {
      errors: formatErrorsKeyValue(resetPassword.error),
      success: "",
    };
  }

  const url = `${process.env.API_URL_LARAVEL}/reset-password`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...resetPassword.data, token }),
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
