"use server";

import { SignUpSchema, SuccessSchema } from "@/src/schemas";
import { SignUpActionResponse } from "@/src/types";
import { treeifyError } from "zod";

export async function signUp(prevState: SignUpActionResponse, formData: FormData) {
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
    const signUpErrors = treeifyError(signUp.error);
    return {
      errors: signUpErrors.properties,
      success: false,
      inputs: rawData,
      message: "",
    };
  }
  const url = `${process.env.API_URL_LARAVEL}/sign-up`;
  console.log(JSON.stringify(signUp.data));

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
    console.log(req);
    return {
      success: false,
      inputs: rawData,
      message: "Hubo un error al generar su registro",
    };
  }

  const message = SuccessSchema.parse(json);

  return {
    success: true,
    message: message.message,
  };
}
