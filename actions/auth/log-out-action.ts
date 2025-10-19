"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logOut() {
  const cookie = await cookies();
  cookie.delete("RESOLVIO_TOKEN");
  redirect("/auth/login");
}
