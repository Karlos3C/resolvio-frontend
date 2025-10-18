import { cookies } from "next/headers";

export default async function getToken() {
  const cookie = await cookies();
  return cookie.get("RESOLVIO_TOKEN")?.value;
}
