import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { CheckSessionResponse } from "../schemas/auth";
import getToken from "./token";

export const verifySession = cache(async () => {
  const token = await getToken();
  if (!token) redirect("/auth/login");

  const url = `${process.env.API_URL_LARAVEL}/check-session`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const session = await req.json();
  if (!req.ok) redirect("/auth/login");

  const result = CheckSessionResponse.safeParse(session);
  if (!result.success) redirect("/auth/login");

  return {
    user: result.data.user,
    isAuth: true,
  };
});
